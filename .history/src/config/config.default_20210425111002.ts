import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1619157877167_8774';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // 配置数据库
  config.orm = {
    type: 'mysql',
    database: 'cai_admin',
    username: 'root',
    password: '123456',
    host: 'localhost',
    synchronize: true
  }

  config.swagger = {
    title: '接口文档',
    description: '后台管理接口文档',
    version: '1.0.0',
    termsOfService: '',
    // contact: {
    //   name: "API Support",
    //   url: "http://www.example.com/support",
    //   email: "support@example.com"
    // },
    // license: {
    //   name: "Apache 2.0",
    //   url: "https://www.apache.org/licenses/LICENSE-2.0.html"
    // }
  }

  return config;
};
