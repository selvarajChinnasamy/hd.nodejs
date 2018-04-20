const hotproductListModel = require('../model/hotproduct.model');
var express = require('express');

module.exports = app => {
  
  app.get('/get-hot-product', (req, res) => {
    hotproductListModel.gethotproductList((err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
          res.status(200).json({
           title: 'Hot Products',
           products: data
          });
        }
        });      
  });
  
  app.post('/get-hot-product-all', (req, res) => {
    const gethotProductAll = {
      start_limit: req.body.startLimit,
      end_limit: req.body.endLimit
    };
    hotproductListModel.gethotproductlistAll(gethotProductAll,(err, data) => {
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
