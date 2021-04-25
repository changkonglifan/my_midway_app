/*
 * @Author: XuYang 
 * @Date: 2021-04-25 09:36:06 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 09:52:35
 * 用户表, 存储用户名等信息
 */
// import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@EntityModel('cl_user')
export class User{
    @PrimaryGeneratedColumn()
    @Column({ comment: '部门ID', type: 'bigint', nullable: true })
    departmentId: number;
  
    @Column({ comment: '姓名', nullable: true })
    name: string;
  
    @Index({ unique: true })
    @Column({ comment: '用户名', length: 100 })
    username: string;
  
    @Column({ comment: '密码' })
    password: string;
  
    @Column({
      comment: '密码版本, 作用是改完密码，让原来的token失效',
      default: 1,
    })
    passwordV: number;
  
    @Column({ comment: '昵称', nullable: true })
    nickName: string;
  
    @Column({ comment: '头像', nullable: true })
    headImg: string;
  
    @Index()
    @Column({ comment: '手机', nullable: true, length: 20 })
    phone: string;
  
    @Column({ comment: '邮箱', nullable: true })
    email: string;
  
    @Column({ comment: '备注', nullable: true })
    remark: string;
  
    @Column({ comment: '状态 0:禁用 1：启用', default: 1, type: 'tinyint' })
    status: number;
    // 部门名称
    departmentName: string;
    // 角色ID列表
    roleIdList: number[];
}
