/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  id: number;
  username: string;
  password: string;
}

/**
 * 登陆
 */
export interface ILoginOption{
  username: string;
  password: string;
}
/**
 * 返回结果
 */
export interface IResponse {
  code: number;
  message: string;
  data: any;
}
