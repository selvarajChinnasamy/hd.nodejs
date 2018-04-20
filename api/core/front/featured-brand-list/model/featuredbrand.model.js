

const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let getfeaturedBrand = {};

getfeaturedBrand.getfeaturedBrand = (callback) => {
    if (connection) {
      connection.query(`select brands.id as brandId, brands.brand_name as brandName, brands.brand_logo as brandLogo from brands where featured_brand = 1 limit 4`,
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
  
  getfeaturedBrand.getfeaturedbrandAll = (getfeaturedbrand,callback) => {
    if (connection) {
      connection.query(`select brands.id as brandId, brands.brand_name as brandName, brands.brand_logo as brandLogo from brands where featured_brand = 1 
      LIMIT ${connection.escape(getfeaturedbrand.start_limit)}, ${connection.escape(getfeaturedbrand.end_limit)}`,
        (err, rows) => {
          if(rows) { 
            if (err) {
              return err
            }
            else {
              callback(err, rows);
            }
          } else {
            var noData = 'No Data Found';
            callback(err, 'nodata');
          }
        }
      )
    }
  };

module.exports = getfeaturedBrand;
