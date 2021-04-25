import { Inject, Controller, Post, Provide, Query, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';
import { IUserOptions } from '../interface';

@Provide('us')
export class uS {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}


@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  us: uS

  @Post('/get_user')
  async getUser(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({ uid });
    this.us.getUser();
    return { success: true, message: 'OK', data: user };
  }

  /**
   * 获取用户
   * @param uid 
   * @returns 
   */
  @Get('/getUser')
  async getU(@Query() uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({uid});
    return { success: true, message: 'ok', data: user}
  }
}
