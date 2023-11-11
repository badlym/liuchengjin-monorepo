/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
  TYPE = 'success',
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

/**
 * 接口请求返回状态码
 */
export enum ResponseCode {
  /**
   * 成功
   */
  Success = 0,

  /**
   * 错误
   */
  Error = 500,

  /**
   * 未授权
   */
  Unauthorized = 401,

  /**
   * 禁止访问
   */
  Forbidden = 403,

  /**
   * 参数不能为空
   */
  NotNull = 10001,

  /**
   * 数据库记录已存在
   */
  DbRecordExists = 10002,

  /**
   * 获取参数失败
   */
  ParamsGetError = 10003,

  /**
   * 账号或密码错误
   */
  AccountPasswordError = 10004,

  /**
   * 账号已被禁用
   */
  AccountDisable = 10005,

  /**
   * 标识不能为空
   */
  IdentifierNotNull = 10006,

  /**
   * 验证码错误
   */
  CaptchaError = 10007,
  /**
   * 子菜单已存在
   */
  SubMenuExist = 10008,
  /**
   * 密码错误
   */
  PasswordError = 10009,
  /**
   * 账号不存在
   */
  AccountNotExist = 10010,
  /**
   * 上级部门错误
   */
  SuperiorDeptError = 10011,
  /**
   * 上级菜单错误
   */
  SuperiorMenuError = 10012,
  /**
   * 数据范围参数错误
   */
  DataScopeParamsError = 10013,
  /**
   * 部门下存在子部门无法删除
   */
  DeptSubDeleteError = 10014,
  /**
   * 部门下存在用户无法删除
   */
  DeptUserDeleteError = 10015,
  /**
   * JSON格式错误
   */
  JsonFormatError = 10016,
  /**
   * 上级区域错误
   */
  SuperiorRegionError = 10017,
  /**
   * 区域下存在子区域无法删除
   */
  RegionSubDeleteError = 10018,
}
