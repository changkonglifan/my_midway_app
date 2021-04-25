/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}
/**
 * 返回结果
 */
export interface IResponse {
  code: number;
  message: string;
  data: any;
}
