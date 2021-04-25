import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as orm from '@midwayjs/orm';
import * as swagger from '@midwayjs/swagger';
import * as cache from '@midwayjs/cache';     // 导入cacheComponent模块
import * as bodyParser from 'koa-bodyparser';

@Configuration({
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
  imports: [
    orm,
    swagger,
    cache
  ]
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
