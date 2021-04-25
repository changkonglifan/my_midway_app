/*
 * @Author: XuYang 
 * @Date: 2021-04-25 09:49:20 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-04-25 10:01:43
 * 自动链接数据库,创建表结构
 */
// import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection({
    type: 'mysql',
    host: 'localhost',
    port:  3306,
    username: 'root',
    password: '123456',
    database: 'cai_admin',
    entities: [__dirname + '/entity/*.ts'],
    synchronize: true
}).then((connection) => {
    console.log(connection);
}).catch((err)=>console.log(err));