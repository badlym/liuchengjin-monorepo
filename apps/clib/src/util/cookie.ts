export function setCookie(name: string, value: string, expiredays: number) {
  const exdate = new Date();
  exdate.setTime(exdate.getTime() + expiredays);
  exdate.setDate(exdate.getDate() + expiredays);

  const expires = expiredays === null ? '' : `;expires= ${exdate}`;

  document.cookie = `${name}=${escape(value)}${expires};path=/`;
}
export function getCookie(name: string) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if (document.cookie.match(reg)) {
    return document.cookie.match(reg)?.[2] || '';
  }
  return '';
}
export function delCookie(name: string) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
