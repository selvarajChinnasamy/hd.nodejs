const todaydealhomeModel = require('../model/todaydeal.model');
var express = require('express');

module.exports = app => {
  
  app.post('/get-home-todaydeal', (req, res) => {
    const getHomeDeal = {
      current_date: req.body.currentDate
    };
    todaydealhomeModel.gettodaydealHome(getHomeDeal,(err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
        res.status(200).json({
          title: 'Today Deals',
          products: data
        });
      }
        });      
  });
  
  app.post('/get-home-todaydeal-all', (req, res) => {
    const getHomeDealAll = {
      current_date: req.body.currentDate,
      start_limit: req.body.startLimit,
      end_limit: req.body.endLimit
    };
    
    todaydealhomeModel.gettodaydealHomeAll(getHomeDealAll,(err, data) => {
      if(data == 'No Data Found') {
        res.status(400).json({data});
      } else {
        res.status(200).json({
          title: 'Today Deals',
          products: data
        });
      }
        
      });      
  });

};
