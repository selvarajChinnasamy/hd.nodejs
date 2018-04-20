const getfeaturedBrand = require('../model/featuredbrand.model');
var express = require('express');

module.exports = app => {
  
  app.get('/get-featured-brands', (req, res) => {
    getfeaturedBrand.getfeaturedBrand((err, data) => {
      res.status(200).json({
        title: 'Featured Brands',
        brand: data
      });
    });      
  });
  
  app.post('/get-featured-brands-all', (req, res) => {
    const getfeaturedbrandAll = {
        start_limit: req.body.startLimit,
        end_limit: req.body.endLimit
      };
    getfeaturedBrand.getfeaturedbrandAll(getfeaturedbrandAll,(err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
          res.status(200).json({
           title: 'Featured Brands',
           brand: data
          });
        }
        });      
  });

};
