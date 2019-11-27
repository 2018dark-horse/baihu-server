* 安装：npm install
* 运行：npr start
* 环境要求
1) npm 包管理工具
2) 安装node
3) https://www.npmjs.com/

* 安装myqsl
1) 需要mysql
2) 配置mysql参数在config/database.json中

* ts学习文档
1) https://www.tslang.cn/docs/handbook/declaration-files/templates.html

* SQL教程
1) https://www.w3school.com.cn/sql/index.asp

* 接口测试
1) https://www.eolinker.com/
2) 为了方便查看接口是否正确，使用eolinker进行测试

* 接口规则
1) post：新增
2) get：获取信息
3) put：修改
4) delete：删除
5) 代码中已给出完整示例
6) 操作错误：需要创建一个ilong(爱农)数据库，需要一个user表，和需要操作的字段(id,name,age,grender等)

* 项目结构说明
1) config：系统配置
2) src：源码文件管理
3) tools：需要的工具管理
4) typing：提示文件或者一些自定义,因为使用的是TypeScript编写代码，所以很多第三方包是没有写解释的，有错误提示，就需要自己写.d.ts提示文件
5) debug.js：js入口文件
6) src/index.ts：ts入口文件，所有项目代码都使用ts(TypeScript)编写，有利于项目维护和代码解读

* 服务器依赖
1) express：成熟的js服务器框架
2) mysql：js操作数据库框架
3) ts-node：nodejs + tsc能更方便的使用ts进行编译(手动搭建需要nodejs+tsc，然后对ts代码进行gulp成为js代码，才可执行，ts-node可以就可以直接使用)
4) typescript：tsc库

* 暂时没有使用热更新，所以每次编写代码都需要一次重启，后面熟悉了可以搭建热更新环境
* 暂时没有图片上传功能，可以使用multer包(使用multer进行图片上传,上面给出的包管理工具网址可以找到)
1) 没有什么好交代的了，先打基础，集成太多东西，对基础不好，不建议使用脚手架
2) 。
