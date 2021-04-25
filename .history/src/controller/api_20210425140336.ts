import { Inject, Controller, Post, Provide, Query, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IResponse } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query() uid: string): Promise<IResponse> {
    const user = await this.userService.getUser({ uid: uid });
    return { code: 0, message: 'OK', data: user };
  }

  /**
   * 获取用户
   * @param uid 
   * @returns 
   */
  @Get('/getUser')
  async getU(@Query() uid: string): Promise<IResponse> {
    const user = await this.userService.getUser({uid: uid});
    return { code: 0, message: 'ok', data: user}
  }

  @Get('/getAll')
  async getAll(): Promise<IResponse> {
    const list = await this.userService.getAllUser();
    return {code: 0, message: 'ok', data: list}
  }
}
