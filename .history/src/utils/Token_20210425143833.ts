/*
 * @Author: XuYang 
 * @Date: 2021-04-25 13:57:16 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 14:38:33
 * Token 相关处理
 */

import { Config, Inject, Provide } from "@midwayjs/decorator";
import { IUserOptions } from "../interface";
import * as jwt from 'jsonwebtoken';
import { CacheManager } from '@midwayjs/cache';

@Provide()
export class TokenService {
    @Config('token')
    config;

    @Inject(`cache:cacheManager`)
    cache: CacheManager;          //依赖注入CacheManager
    /**
     * 生成token
     * @param user 
     * @param expire 
     * @param isRefresh 
     */
    async generateToken(user: IUserOptions, isRefresh: boolean ) {
        await CacheManager.set
        const tokenInfo = {
            isRefresh: isRefresh ? true : false,
            username: user.username,
        }
        return jwt.sign(tokenInfo, this.config.secret, this.config.expire);
        
    }
}