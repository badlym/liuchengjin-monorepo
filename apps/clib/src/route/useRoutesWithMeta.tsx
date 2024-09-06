import { Navigate, useNavigate, type RouteObject } from 'react-router-dom';
import React, { useEffect } from 'react';
import { gotoLogin } from '../util/sso';
import Loading from './loading';

/** 路由配置的扩展定义项 */
interface RouteMeta {
  /** 是否必须登录 */
  requireLogin?: boolean | (() => boolean);
  /** 该路由对应的 document.title */
  title?: string;
  /** requiredLogin为true的情况下，在登录校验失败后重定向的url，如果不设置，重定向到登录页 */
  redirectPath?: string;
}

/** 必须要采用扩展现有定义的方式，因为 RouteObject.children[n] 还是 RouteObject 类型，存在级联 */
declare module 'react-router-dom' {
  interface IndexRouteObject {
    meta?: RouteMeta;
  }
  interface NonIndexRouteObject {
    meta?: RouteMeta;
  }
}

/** 扩展定义前的原始 RouteObject 定义 */
// type OriginalRouteObject = Omit<RouteObject, 'meta'>;

/** 自动增加对 document.title 的同步，包含组件渲染时设置，退出还原设置 */
function SetTitle(props: { title: string; children: React.ReactNode; }) {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = props.title;
    console.log('document.title setTo', props.title);
    return () => {
      document.title = oldTitle;
    };
  }, []);
  return <React.Fragment>{props.children}</React.Fragment>;
}

function Redirect(props: { loginPath: string; message: string; gotoLogin?: () => void; }) {
  if (props.gotoLogin) {
    props.gotoLogin();
  } else {
    gotoLogin(props.loginPath, props.message);
  }
  return null;
}

export interface ProcessRoutesOptions {
  isLogged: boolean;
  isValid: boolean | undefined;
  message: string;
  loginUrl: string;
  STATIC_URL: string;
  noValidUrl?: string;
  gotoLogin?: () => void;
  brand: string;
}

/** 把带有 meta 信息的路由配置转换成标准路由配置，对 element 包裹 wrapper 组件来实现 meta 语义 */
export function processRoutesWithMeta(routes: RouteObject[], options: ProcessRoutesOptions): RouteObject[] {
  const { isLogged, isValid, loginUrl, STATIC_URL, noValidUrl, message, gotoLogin, brand } = options;

  const showBrand = brand ? `-${brand}` : '';

  return routes.map(route => {

    if (route.meta) {
      const { title, requireLogin, redirectPath } = route.meta;
      if (title) {
        route.element;
        route.element = (
          <SetTitle key={route.path} title={`${title}${showBrand}`}>
            {/* <React.Suspense fallback={<Loading src={`${STATIC_URL}/img/common/loading-icon.gif`} />}> */}
            <React.Suspense fallback={<></>}>
              {route.element!}
            </React.Suspense>
          </SetTitle>
        );
      }
      // if (requireLogin && !isLogged) {
      //   route.element = <Redirect loginPath={loginUrl} message={message} />;
      // } else if (isLogged && isValid === false && noValidUrl) {
      //   // route.element = <Navigate to={noValidUrl} replace />;
      //   route.element = <Redirect loginPath={loginUrl} message={message} />;
      // }
      if ((requireLogin && !isLogged) || (isLogged && isValid === false && noValidUrl)) {
        if (redirectPath) {
          route.element = <Navigate to={redirectPath} replace />;
        } else {
          route.element = <Redirect loginPath={loginUrl} message={message} gotoLogin={gotoLogin} />;
        }
      }
    }

    if (route.children) {
      let children = route.children;
      if (route.meta && route.meta.requireLogin) {
        const checkLogin =
          typeof route.meta.requireLogin === 'function' ? route.meta.requireLogin() : route.meta.requireLogin ?? true;

        children = children.map(item => ({
          ...item,
          meta: { ...item.meta, requireLogin: checkLogin },
        }));
      }
      route.children = processRoutesWithMeta(children, {
        isValid,
        isLogged,
        noValidUrl,
        loginUrl,
        STATIC_URL,
        message,
      });
    }
    return route as RouteObject;
  });
}
