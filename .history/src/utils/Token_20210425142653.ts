/*
 * @Author: XuYang 
 * @Date: 2021-04-25 13:57:16 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 14:26:53
 * Token 相关处理
 */

import { Provide } from "@midwayjs/decorator";
import { IUserOptions } from "../interface";
import * as jwt from 'jsonwebtoken';

@Provide()
export class TokenService {
    constructor(){
        
    }
    /**
     * 生成token
     * @param user 
     * @param expire 
     * @param isRefresh 
     */
    async generateToken(user: IUserOptions, expire: number, isRefresh: boolean ) {
        const tokenInfo = {
            isRefresh: isRefresh ? true : false,
            username: user.username,
        }
        return jwt.sign(tokenInfo)
        
    }
}