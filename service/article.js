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

/**
 * @msg: 获得id的文章
 * @param {type} 
 * @return: 该id文章数据
 */
Article.findIdActicle = (id) => {
  return mineArticle
    .findById(id, {
      raw: true
    })
    .then(results => {
      // console.log(results)
      return results;
    })
    .catch(err => {
      return err;
    });
};
// Article.findIdActicle(1)
module.exports = Article;
