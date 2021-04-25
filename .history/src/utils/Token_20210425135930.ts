/*
 * @Author: XuYang 
 * @Date: 2021-04-25 13:57:16 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 13:59:29
 * Token 相关处理
 */

import { IUserOptions } from "../interface";

export class Token {
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
            isRefresh: false,
            username: user.username,
        }
    }
}