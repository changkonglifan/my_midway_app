/*
 * @Author: XuYang 
 * @Date: 2021-04-25 13:57:16 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 16:45:36
 * Token 相关处理
 */

import { Config, Inject, Provide } from "@midwayjs/decorator";
import { IUserOptions } from "../interface";
import * as jwt from 'jsonwebtoken';
import { CacheManager } from '@midwayjs/cache';
import { Context } from 'egg';
import { Constants } from "./Constants";

@Provide()
export class TokenService {

    @Config('token')
    config;

    @Inject(`cache:cacheManager`)
    cache: CacheManager;          //依赖注入CacheManager

    @Inject()
    ctx: Context

    @Inject()
    constants: Constants

    /**
     * 生成token
     * @param user 
     * @param expire 
     * @param isRefresh 
     */
    async generateToken(user: IUserOptions ):Promise<string> {
        const tokenInfo = {
            time: new Date().getTime(),
            username: user.username,
        }
        const token = jwt.sign(tokenInfo, this.config.secret,{
            expire: this.config.expire
        });
        /**
         * 写入缓存
         */
        await this.cache.set( this.constants.PC_ADMIN + user.username, token)
        return token;
    }
    /**
     * 刷新token
     * @param user 
     * @param token 
     */
    async refreshToken(user: IUserOptions, token: string){
        try{
            const decoded = jwt.verify(token, this.config.secret);
            if(decoded) {
                if(decoded.username !== user.username){
                    this.ctx.body = {
                        code : '-100',
                        message: 'token错误'
                    }
                }
                if(decoded.expire + new Date().getTime())
            }
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