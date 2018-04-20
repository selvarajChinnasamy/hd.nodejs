

const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let categorygroupModel = {};

/* list category Group  */
categorygroupModel.getcategoryGroup = (callback) => {
    if (connection) {
      connection.query(`select category_groups.id as categoryGroupId, category_groups.category_group_name as categoryGroupName, category_groups.category_group_image as categoryGroupImage from category_groups`,
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
  
  categorygroupModel.addcategoryGroup = (categoryGroup,callback) => {
    if (connection) {
      connection.query('INSERT INTO category_groups SET ?', categoryGroup,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            callback(null, {'msg': 'Category Group Saved Successfully'});
          }
        }
      )
    }
  };
  
  categorygroupModel.editcategoryGroup = (editcategoryGroup, callback) => {
    if (connection) {
      if(editcategoryGroup.category_group_image) {
        const sql = `
        UPDATE category_groups SET
        category_group_name = ${connection.escape(editcategoryGroup.category_group_name)},
        category_group_image = ${connection.escape(editcategoryGroup.category_group_image)}
        WHERE id = ${editcategoryGroup.category_group_id}`;
  
      connection.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(null, {
            "msg": "Category Group Updated Successfully"
          })
        }
      }); 
      } else {
        const sql = `
        UPDATE category_groups SET
        category_group_name = ${connection.escape(editcategoryGroup.category_group_name)}
        WHERE id = ${editcategoryGroup.category_group_id}`;
  
      connection.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(null, {
            "msg": "Category Group Updated Successfully"
          })
        }
      });
      }
    }
  };
  
  categorygroupModel.activecategoryGroup = (activecategoryGroup, callback) => {
    if (connection) {
        const sql = `
        UPDATE category_groups SET
        is_active = ${connection.escape(activecategoryGroup.is_active)}
        WHERE id = ${activecategoryGroup.category_group_id}`;
  
      connection.query(sql, function (err, result) {
        if (err) {
          throw err;
        } else {
          callback(null, {
            "msg": "Status Updated Successfully"
          })
        }
      });
    }
  };

module.exports = categorygroupModel;
