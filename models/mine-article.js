var Sequelize = require("sequelize");
var sequelize = require("../database/config").sequelize;

exports.mineArticle = sequelize.define(
  "mine-article",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    title: { type: Sequelize.STRING },
    category: { type: Sequelize.INTEGER },
    summary: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    createtime: { type: Sequelize.TIME },
    updatetime: { type: Sequelize.TIME },
    readnum: { type: Sequelize.INTEGER },
    likenum: { type: Sequelize.INTEGER }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
