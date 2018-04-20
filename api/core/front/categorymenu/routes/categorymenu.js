const categorygroupmenuModel = require('../model/categorymenuModel');
var express = require('express');
const multer = require('multer');

module.exports = app => {
    
  app.get('/get-category-group-menu', (req, res) => {
    categorygroupmenuModel.getcategorygroupMenu((err, data) => {
          res.status(200).json({data});
        });      
  });
  
  app.get('/get-category-group-menu-all', (req, res) => {
    categorygroupmenuModel.getcategorygroupMenuAll((err, data) => {
          res.status(200).json({data});
        });      
  });
  
};
