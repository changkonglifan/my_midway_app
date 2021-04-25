/*
 * @Author: XuYang 
 * @Date: 2021-04-25 13:57:16 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 14:05:59
 * Token 相关处理
 */

import { Provide } from "@midwayjs/decorator";
import { User } from "../entity/user";

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
    async generateToken(user: User, expire: number, isRefresh: boolean ) {
        const tokenInfo = {
            isRefresh: false,
            username: user.username,
        }

        
    }
}