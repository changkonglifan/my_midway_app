/*
 * @Author: XuYang 
 * @Date: 2021-04-25 10:16:55 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 14:48:41
 * 用户相关操作
 */
import {  Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import {  ILoginOption } from '../interface';

@Provide()
export class UserService{

    // 注册实体类
    @InjectEntityModel(User)
    userModel: Repository<User>;
    /**
     * 获取所有用户
     * @returns 
     */
    async getAllUser(){
        // let user = new User();
        // 查询所有
        let allUser = await this.userModel.find();
        console.log('select all user', allUser);
        return allUser;
    }
    /**
     * 查询某用户
     * @param options 
     * @returns 
     */
    async getUser(uid: {uid: string}) {
        return {
            uid: uid,
            username: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com',
        };
    }
    /**
     * 登陆
     * @param options 
     */
    async getUserById(username: string) {
        return await this.userModel.findOne({ username: username })
    }

}