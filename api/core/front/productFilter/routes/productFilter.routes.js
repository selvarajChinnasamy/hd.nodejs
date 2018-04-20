const productFilterModel = require('../model/productFilter.model');
var express = require('express');

module.exports = app => {
    
  app.post('/get-product-filter', (req, res) => {
    productFilterModel.getproductFilter(req.body.productId,(err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
        res.status(200).json({data});
      }
        });      
  });
  
};
