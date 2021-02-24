## mine-blog 后端

### 目录结构

```
mine-blog-api
├── app.js
├── bin
│   └── www
├── database
│   └── config.js
├── models
│   ├── mine-article.js
│   └── mine-category.js
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── README.md
├── routes
│   ├── article.js
│   ├── index.js
│   └── users.js
├── service
│   └── article.js
├── tree.md
├── tree.txt
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

### 技术框架：node+express

### 项目结构：

1. bin 项目启动文件
2. database 数据库信息
3. models sequelize模型：定义model和表之间的映射
4. public 项目静态文件
5. routes 项目路由信息文件
6. service 数据库操作
4. views 视图文件

### 数据库

#### 表结构

1. 文章表

```sql
CREATE TABLE `mine-article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `category` tinyint(255) DEFAULT NULL COMMENT '分类',
  `summary` varchar(255) DEFAULT NULL COMMENT '文章简介',
  `content` text COMMENT '文章内容',
  `createtime` datetime DEFAULT NULL COMMENT '创建时间',
  `updatetime` datetime DEFAULT NULL COMMENT '更新时间',
  `readnum` int(11) DEFAULT NULL COMMENT '阅读数',
  `likenum` int(11) DEFAULT NULL COMMENT '点赞数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
2. 分类表

```sql
CREATE TABLE `mine-category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL COMMENT '分类id',
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '类别名称',
  `category_num` int(11) DEFAULT NULL COMMENT '该类文章数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```
### API接口

#### 1.查看所有文章数据

- URL：`article/findAllActicle`

- 请求方式: get

- 请求参数：null 

- 返回参数：

```json
{
    "code": 1,
    "results": [
        {
            "id": 1,
            "title": "Navicat连接Mysql8.0.11出现2059错误",
            "category": 1,
            "summary": "出现这个原因是mysql8之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password",
            "content": "# 问题：Navicat连接Mysql8.0.11出现2059错误\r\n\r\n![错误提示](./img/2059错误.png)\r\n\r\n## 原因\r\n\r\n- 出现这个原因是mysql8之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password, 解决问题方法有两种,一种是升级navicat驱动,一种是把mysql用户登录密码加密规则还原成mysql_native_password\r\n\r\n## 解决方案\r\n\r\n```sql\r\nALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; #修改加密规则 \r\nALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; #更新一下用户的密码 \r\nFLUSH PRIVILEGES; #刷新权限\r\n```",
            "createtime": "2018-12-04T02:56:15.000Z",
            "updatetime": "2018-12-04T02:56:18.000Z",
            "readnum": 0,
            "likenum": 0
        }
    ]
}
```
#### 2.查看所有分类数据

- url: `article/findAllCategory`

- 请求方式：get

- 请求餐水：null

- 返回数据： 

```json
{
    "code": 1,
    "results": [
        {
            "id": 1,
            "category_id": 1,
            "category_name": "数据库相关",
            "category_num": 1
        }
    ]
}
```