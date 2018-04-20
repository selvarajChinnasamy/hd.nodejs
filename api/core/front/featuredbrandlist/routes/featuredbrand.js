const getfeaturedBrand = require('../model/featuredbrandModel');
var express = require('express');

module.exports = app => {
  
  app.get('/get-featured-brand', (req, res) => {
    getfeaturedBrand.getfeaturedBrand((err, data) => {
          
          res.status(200).json({
           title: 'Featured Brand',
           brand: data
          });
        });      
  });
  
  app.get('/get-featured-brand-all', (req, res) => {
    getfeaturedBrand.getfeaturedBrandAll((err, data) => {
          
          res.status(200).json({
           title: 'Featured Brand',
           brand: data
          });
        });      
  });

};
