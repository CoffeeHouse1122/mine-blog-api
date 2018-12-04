/**
// 连接数据库
var mysql = require('mysql');

var connection = {
  host: "localhost", // 这是数据库的地址

  user: "root", // 需要用户的名字

  password: "password", // 用户密码,如果你没有密码,直接双引号就是

  database: "mine-blog-api" // 数据库名字
}

var db = mysql.createConnection(connection);

db.connect();

module.exports = db; // 用module.exports暴露出这个接口
*/

var Sequelize = require("Sequelize");
const sequelize = new Sequelize("mine-blog-api", "root", "password", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  timezone: "+08:00",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

exports.sequelize = sequelize;
