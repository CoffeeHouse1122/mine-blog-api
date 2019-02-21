var express = require("express");
var router = express.Router();
const Article = require("../service/article");

/**
 * @msg: 查看所有文章数据
 * @param {type} 
 * @return: 所有文章数据
 */
router.get("/findAllActicle", function(req, res, next) {
  Article.findAllActicle()
    .then(results => {
      if (results) {
        res.send({ code: 1, results: results });
      }
    })
    .catch(err => {
      res.send({ code: 0, err: "服务器错误" });
    });
});

/**
 * @msg: 获得该id的文章数据
 * @param {type} 
 * @return: 该id的文章数据
 */
router.get("/findIdActicle", function(req, res, next) {
  var id = req.query.id
  Article.findIdActicle(id)
    .then(results => {
      if (results) {
        res.send({ code: 1, results: results });
      }
    })
    .catch(err => {
      res.send({ code: 0, err: "服务器错误" });
    });
});

/**
 * @msg: 查看所有分类数据
 * @param {type} 
 * @return: 分类数据
 */
router.get("/findAllCategory", function(req, res, next) {
  Article.findAllCategory()
    .then(results => {
      if (results) {
        res.send({ code: 1, results: results });
      }
    })
    .catch(err => {
      res.send({ code: 0, err: "服务器错误" });
    });
});

module.exports = router;
