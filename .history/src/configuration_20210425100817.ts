import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as orm from '@midwayjs/orm';

@Configuration({
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
  imports: [
    orm
  ]
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
