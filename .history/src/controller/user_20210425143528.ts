/*
 * @Author: XuYang 
 * @Date: 2021-04-25 10:43:05 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 11:19:54
 * 用户相关操作
 */
import { Inject, Controller, Provide, Get, Post, Body } from '@midwayjs/decorator';
import { Context } from 'egg';
import { User } from '../entity/user';
import { IResponse } from '../interface';
import { UserService } from '../service/user';
import { TokenService } from '../utils/Token';

@Provide()
@Controller('/user',{tagName: '用户管理', description: '用户相关操作'})
export class UserController {
    @Inject()
    ctx: Context

    @Inject()
    userService: UserService;

    @Inject()
    tokenService: TokenService
    /**
     * 获取所有用户信息
     * @returns 
     */
    @Get('/getAll')
    async getAllUser(): Promise<IResponse> {
        const userList = await this.userService.getAllUser();
        return {code: 0, message: 'ok', data: userList}
    }

    @Post('/login')
    async login(@Body() user: User): Promise<IResponse> {
        const loginUser = await this.userService.login({username: user.username, password: user.password});
        if(loginUser){
            const loginResult = {
                ...loginUser,
                token: this.tokenService.generateToken(loginUser, false)
            }
            return {code: 0, message: 'ok', data: loginResult}
        }

    }
}