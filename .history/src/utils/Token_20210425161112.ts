/*
 * @Author: XuYang 
 * @Date: 2021-04-25 13:57:16 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 16:11:02
 * Token 相关处理
 */

import { Config, Inject, Provide } from "@midwayjs/decorator";
import { IUserOptions } from "../interface";
import * as jwt from 'jsonwebtoken';
import { CacheManager } from '@midwayjs/cache';
import { Context } from 'egg';

@Provide()
export class TokenService {

    @Config('token')
    config;

    @Inject(`cache:cacheManager`)
    cache: CacheManager;          //依赖注入CacheManager

    @Inject()
    ctx: Context

    /**
     * 生成token
     * @param user 
     * @param expire 
     * @param isRefresh 
     */
    async generateToken(user: IUserOptions, isRefresh: boolean ):Promise<string> {
        // await this.cache.set('')
        const tokenInfo = {
            isRefresh: isRefresh ? true : false,
            username: user.username,
        }
        const token =  jwt.sign(tokenInfo, this.config.secret,{
            expiresIn: this.config.expire
        });
        console.log(token)
        return token;
    }
    /**
     * 刷新token
     * @param user 
     * @param token 
     */
    async refreshToken(user: IUserOptions, token: string){
        try{
        }catch(err){
            console.log(err);
            this.ctx.status = 401;
            this.ctx.body = { 
                code : '-100',
                message: 'token失效'
            }
        }
    }
}