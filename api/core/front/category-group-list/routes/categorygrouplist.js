const categorygrouplistModel = require('../model/categorygrouplist.model');
var express = require('express');
const multer = require('multer');

module.exports = app => {
    
  app.get('/get-category-group-list', (req, res) => {
    categorygrouplistModel.getcategorygroupList((err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
        res.status(200).json({data});
      }
        });      
  });
  
};
