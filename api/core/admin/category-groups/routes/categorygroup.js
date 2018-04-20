const categoryGroupModel = require('../model/categorygroup.model');
var express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './assets/images/categorygroup/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }  
});

const upload = multer({storage: storage});

module.exports = app => {
  
  app.get('/get-categorygroup', (req, res) => {
        categoryGroupModel.getcategoryGroup((err, data) => {
          if(data == 'No Data Found') {
            res.status(400).json({data});
          } else {
            res.status(200).json({data});
          }
        });      
  });
  
  app.post('/add-categorygroup',upload.single('categoryGroupImage'), (req, res) => {
  
    if(req.body.categoryGroupImage) {
        var category_group_image  = '';
    } else {
        var category_group_image = req.file.path;
    }
    
    const categoryGroup =  {
      category_group_name: req.body.categoryGroupName,
      category_group_image: category_group_image,
    }
    
    categoryGroupModel.addcategoryGroup(categoryGroup, function (err, data) {
      res.status(200).json({data: data});
    }); 
  });
  
  
  app.put('/edit-categorygroup',upload.single('categoryGroupImage'), (req, res) => {
  
    if(req.body.categoryGroupImage) {
        var category_group_image  = '';
    } else {
        var category_group_image = req.file.path;
    }
    
    const editcategoryGroup =  {
      category_group_id: req.body.categoryGroupId,
      category_group_name: req.body.categoryGroupName,
      category_group_image: category_group_image,
    }
    
    categoryGroupModel.editcategoryGroup(editcategoryGroup, function (err, data) {
      res.status(200).json({data: data});
    }); 
  });
  
  
  app.put('/activeinactive-categorygroup', (req, res) => {
  
    const activecategoryGroup =  {
      category_group_id: req.body.categoryGroupId,
      is_active: req.body.categoryGroupStatus,
    }
    
    categoryGroupModel.activecategoryGroup(activecategoryGroup, function (err, data) {
      res.status(200).json({data: data});
    }); 
  });
  
  app.put('/delete-categorygroup', (req, res) => {
  
    const activecategoryGroup =  {
      category_group_id: req.body.categoryGroupId,
      is_active: req.body.categoryGroupStatus,
    }
    
    categoryGroupModel.activecategoryGroup(activecategoryGroup, function (err, data) {
      res.status(200).json({data: data});
    }); 
  });
};
