/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}
