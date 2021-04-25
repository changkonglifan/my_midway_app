/*
 * @Author: XuYang 
 * @Date: 2021-04-25 10:43:05 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 10:45:01
 * 用户相关操作
 */
import { Inject, Controller, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { IResponse } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/user')
export class UserController {
    @Inject()
    ctx: Context

    @Inject()
    userService: UserService;

    @Get('/getAll')
    async getAllUser(): Promise<IResponse> {
        const userList = await this.userService.getAllUser();
        return {code: 0, message: 'ok', data: userList}
    }
}