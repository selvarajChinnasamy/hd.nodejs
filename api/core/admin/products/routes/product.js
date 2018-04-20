const productModel = require('../model/product.model');
var express = require('express');
const multer = require('multer');

module.exports = app => {
    
  app.get('/get-product', (req, res) => {
    productModel.getproduct((err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
          res.status(200).json({data});
      }
    });      
  });
  
};
