.
├── app                           // 多项目管理
│   ├── dyd                       // 第一弹主站 项目
│   │   ├── controller            // 控制器 
│   │   ├── static                // 静态资源
│   │   └── views                 // 模板文件
│   └── vhost2                    // 牧羊人之心... 项目
│       ├── controller
│       ├── static
│       └── views
├── bin                           // server 启动
├── config                        // 多环境配置
├── middleware                    // 中间件管理
│   ├── body                      // 请求体处理
│   ├── compress                  // 压缩
│   ├── mock                      // mock 数据
│   ├── mongo                     // 简单数据存储 (可选)
│   ├── proxy                     // 代理 请求
│   ├── router                    // 前端路由管理
│   ├── secure                    // 安全 CSRF
│   ├── session                   // session
│   ├── static                    // 静态资源 托管
│   ├── vhost                     // 多项目 host
│   ├── views                     // 模板引擎
│   └── xload                     // 文件上传下载
├── src                           // 项目入口
└── test                          // 测试


