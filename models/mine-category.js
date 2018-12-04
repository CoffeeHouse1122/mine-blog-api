var Sequelize = require("sequelize");
var sequelize = require("../database/config").sequelize;

exports.mineCategory = sequelize.define(
  "mine-category",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    category_id: { type: Sequelize.INTEGER },
    category_name: { type: Sequelize.STRING },
    category_num: { type: Sequelize.INTEGER }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
