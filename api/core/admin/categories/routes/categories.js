const categoryModel = require('../model/categories.model');
var express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './assets/images/category/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }  
});

const upload = multer({storage: storage});

module.exports = app => {
  
  app.get('/get-category', (req, res) => {
        categoryModel.getcategory((err, data) => {
          if(data == 'No Data Found') {
            res.status(400).json({data});
          } else {
            res.status(200).json({data});
          }
        });      
  });
  
  app.post('/add-category',upload.single('categoryImage'), (req, res) => {
  
    if(req.body.categoryImage) {
        var category_image  = '';
    } else {
        var category_image = req.file.path;
    }
    
    const category =  {
      category_name: req.body.categoryName,
      category_image: category_image,
      category_group_id: req.body.categoryGroupId
    }
    
    categoryModel.addcategory(category, function (err, data) {
      res.status(200).json({data: data});
    }); 
  });
  
  
  app.put('/edit-category',upload.single('categoryImage'), (req, res) => {
  
    if(req.body.categoryImage) {
        var category_image  = '';
    } else {
        var category_image = req.file.path;
    }
    
    const editcategory =  {
      category_id: req.body.categoryId,
      category_name: req.body.categoryName,
      category_image: category_image,
      category_group_id: req.body.categoryGroupId
    }
    
    categoryModel.editcategory(editcategory, function (err, data) {
      res.status(200).json({data: data});
    }); 
  });
  
};
