const categorygroupmenuModel = require('../model/categorymenu.model');
var express = require('express');
const multer = require('multer');

module.exports = app => {
    
  app.get('/get-category-group-menu', (req, res) => {
    categorygroupmenuModel.getcategorygroupMenu((err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
          res.status(200).json({data});
      }
    });      
  });
  
  app.get('/get-category-group-menu-all', (req, res) => {
    categorygroupmenuModel.getcategorygroupMenuAll((err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
          res.status(200).json({data});
      }
    });      
  });
  
};
