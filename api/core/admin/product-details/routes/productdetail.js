const productdetailModel = require('../model/productdetail.model');
var express = require('express');
const multer = require('multer');

module.exports = app => {
  
  app.get('/get-product-detail/:id', (req, res) => {
    const getProductDetail = {
      product_id: req.params.id
    };
    productdetailModel.getproductdetail(getProductDetail,(err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
        res.status(200).json({data});
      }
    });      
  });
  
};
