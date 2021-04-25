/*
 * @Author: XuYang 
 * @Date: 2021-04-25 10:16:55 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 10:25:50
 * 用户相关操作
 */
import {  Inject, Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';

@Provide()
export class UserService{

  // 注册实体类
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getAllUser(){
    // let user = new User();
    // 查询所有
    let allUser = await this.userModel.find();
    console.log('select all user', allUser);
    return allUser;
  }

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

}