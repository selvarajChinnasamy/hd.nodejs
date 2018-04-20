const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let categoryModel = {};

/* list category */
categoryModel.getcategory = (callback) => {
    if (connection) {
      connection.query(`select * from categories`,
        (err, rows) => {
          if(rows) { 
          if (err) {
            return err
          }
          else {
            callback(err, rows);
          }
        } else {
          callback(err, config.nodata.nodataFound);
        }
        }
      )
    }
  };
  
  categoryModel.addcategory = (category, callback) => {
    if (connection) {
      connection.query('INSERT INTO categories SET ?', category,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            callback(null, {'msg': 'Category Saved Successfully'});
          }
        }
      )
    }
  };
  
  
  categoryModel.editcategory = (editcategory, callback) => {
    if (connection) {
      if(editcategory.category_group_image) {
        const sql = `
        UPDATE categories SET
        category_name = ${connection.escape(editcategory.category_name)},
        category_image = ${connection.escape(editcategory.category_image)}
        WHERE id = ${editcategory.category_id}`;
  
      connection.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(null, {
            "msg": "Category Updated Successfully"
          })
        }
      }); 
      } else {
        const sql = `
        UPDATE categories SET
        category_name = ${connection.escape(editcategory.category_name)},
        category_group_id = ${connection.escape(editcategory.category_group_id)}
        WHERE id = ${editcategory.category_id}`;
  
      connection.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(null, {
            "msg": "Category Updated Successfully"
          })
        }
      });
      }
    }
  };
  
module.exports = categoryModel;
