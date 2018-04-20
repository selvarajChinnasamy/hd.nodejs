const productcatalogsModel = require('../model/productcatalogs.model');
var express = require('express');
const multer = require('multer');

module.exports = app => {
    
  app.get('/get-product-catalogs', (req, res) => {
    productcatalogsModel.getproductcatalogs((err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
          res.status(200).json({data});
      }
    });      
  });
  
};
