const connection = require('../../../../../config/config');
let categorygroupmenuModel = {};

categorygroupmenuModel.getcategorygroupMenu = (callback) => {
    if (connection) {
      connection.query(`select category_groups.id as categoryGroupId, category_groups.category_group_name as categoryGroupName, category_groups.category_group_image as categoryGroupImage, 
      category.id as categoryId, category.category_name as categoryName, category.category_image as categoryImage, subCategory.id as subCategoryId,  subCategory.subcategory_name as subcategoryName, subCategory.subcategory_image as subcategoroyImage
      from category_groups
      inner join categories as category on category_groups.id = category.category_group_id
      inner join sub_categories as subCategory on subCategory.id = category.id limit 4`,
        (err, rows) => {
         if(rows.length > 0) {
          if (err) {
            throw err
          }
          else {
            callback(null, rows);
          }
        } else {
            var noData = 'No Record Found';
            callback(null, noData);
        }
        }
      )
    }
  };
  
  categorygroupmenuModel.getcategorygroupMenuAll = (callback) => {
    if (connection) {
      connection.query(`select category_groups.id as categoryGroupId, category_groups.category_group_name as categoryGroupName, category_groups.category_group_image as categoryGroupImage, 
      category.id as categoryId, category.category_name as categoryName, category.category_image as categoryImage, subCategory.id as subCategoryId,  subCategory.subcategory_name as subcategoryName, subCategory.subcategory_image as subcategoroyImage
      from category_groups
      inner join categories as category on category_groups.id = category.category_group_id
      inner join sub_categories as subCategory on subCategory.id = category.id`,
        (err, rows) => {
         if(rows.length > 0) {
          if (err) {
            throw err
          }
          else {
            callback(null, rows);
          }
        } else {
            var noData = 'No Record Found';
            callback(null, noData);
        }
        }
      )
    }
  };

module.exports = categorygroupmenuModel;
