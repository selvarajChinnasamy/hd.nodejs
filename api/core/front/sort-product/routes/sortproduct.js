const shopallModel = require('../model/sortproduct.model');
var express = require('express');

module.exports = app => {
  
  app.post('/sort-product', (req, res) => {
    const getShop = {
      sub_category_id: req.body.subCategoryId,
      start_limit: req.body.startLimit,
      end_limit: req.body.endLimit
    };
    shopallModel.getshopAll(getShop, (err, data) => {
    if(data == 'No Data Found') {
      res.status(400).json({data});
    } else {
      res.status(200).json({
        products: data
      });
    }
    });      
  });
  
  app.post('/get-sort-product', (req, res) => {
    const getsortingProduct = {
      sort_status: req.body.sortStatus,
      sub_category_id: req.body.subCategoryId,
      start_limit: req.body.startLimit,
      end_limit: req.body.endLimit
    };
    shopallModel.getSortingProduct(getsortingProduct, (err, data) => {
    if(data == 'No Data Found') {
      res.status(400).json({data});
    } else {
      res.status(200).json({
        products: data
      });
    }
    });      
  });
};
