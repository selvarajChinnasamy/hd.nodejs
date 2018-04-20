const productdetailModel = require('../model/productoptiondetail.model');
var express = require('express');
const multer = require('multer');

module.exports = app => {
    
  app.get('/get-product-detail', (req, res) => {
    productdetailModel.getproductdetail((err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
          res.status(200).json({data});
      }
    });      
  });
  
};
