const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let categorygrouplistModel = {};

categorygrouplistModel.getcategorygroupList = (callback) => {
    if (connection) {
      connection.query(`select category_groups.id as categoryGroupId, category_groups.category_group_name as categoryGroupName, category_groups.category_group_image as categoryGroupImage from category_groups`,
        (err, rows) => {
          if(rows) { 
            if (err) {
              throw err
            }
            else {
              callback(null, rows);
            }
          } else {
            callback(err, config.nodata.nodataFound);
          }
        }
      )
    }
  };

module.exports = categorygrouplistModel;
