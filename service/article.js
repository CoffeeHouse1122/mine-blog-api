const mineArticle = require("../models/mine-article").mineArticle;
const mineCategory = require("../models/mine-category").mineCategory;

var Article = {};


/**
 * @msg: 查看所有文章信息
 * @param {type} 
 * @return: 所有文章数据
 */
Article.findAllActicle = () => {
  return mineArticle
    .findAll({
      raw: true
    })
    .then(results => {
      return results;
    })
    .catch(err => {
      return err;
    });
};

/**
 * @msg: 查看所有分类数据
 * @param {type} 
 * @return: 分类数据
 */
Article.findAllCategory = () => {
  return mineCategory
    .findAll({
      raw: true
    })
    .then(results => {
      return results;
    })
    .catch(err => {
      return err;
    });
};

module.exports = Article;
