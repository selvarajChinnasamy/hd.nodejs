

const connection = require('../../../../../config/config');
let getfeaturedBrand = {};

getfeaturedBrand.getfeaturedBrand = (callback) => {
    if (connection) {
      connection.query(`select brands.id as brandId, brands.brand_name as brandName, brands.brand_logo as brandLogo from brands where featured_brand = 1 limit 4`,
        (err, rows) => {
          if(rows.length > 0) { 
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
  
  getfeaturedBrand.getfeaturedBrandAll = (callback) => {
    if (connection) {
      connection.query(`select brands.id as brandId, brands.brand_name as brandName, brands.brand_logo as brandLogo from brands where featured_brand = 1`,
        (err, rows) => {
          if(rows.length > 0) { 
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
