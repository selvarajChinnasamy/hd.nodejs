const getsliderModel = require('../model/slider.model');
var express = require('express');

module.exports = app => {
  
  app.get('/get-slider', (req, res) => {
    getsliderModel.getSlider((err, data) => {
      if(data == 'No Data Found') {
          res.status(400).json({data});
      } else {
          res.status(200).json({data});
        }
      });      
  });
};
