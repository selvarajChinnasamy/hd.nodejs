

const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let hostproductListModel = {};

hostproductListModel.gethotproductList = (callback) => {
    if (connection) {
      connection.query(`select products.id as productId, product_catalogs.product_name as productName,product_catalogs.main_image as productImage, products.actual_price as actualPrice, products.sales_price as salesPrice, products.discount as discount, products.discount_type as discountType from products  
      inner join product_catalogs on product_catalogs.id = products.product_catalog_id
      where products.hot_product = 1 order by products.id limit 4`,
        (err, rows) => {
          if(rows) {
            if (err) {
              return err
            }
            else {
              connection.query(`select * FROM site_settings
              inner join currency_settings on site_settings.currency_id = currency_settings.id`, (err, currencysetting)=>{
                if(err) {
                    return err;
                } else {
                  for(i=0; i< rows.length; i++) {
                    rows[i].currencySymbol = currencysetting[0].currency_symbol; 
                  }
                  callback(err, rows)
                }
              });
            }
        } else {
          callback(err, config.nodata.nodataFound);
        }
        }
      )
    }
  };
  
  hostproductListModel.gethotproductlistAll = (gethotProductAll ,callback) => {
    if (connection) {
      connection.query(`select products.id as productId, product_catalogs.product_name as productName,product_catalogs.main_image as productImage, products.actual_price as actualPrice, products.sales_price as salesPrice, products.discount as discount, products.discount_type as discountType, product_ratings.user_rating as userRaring from products  
      left join product_ratings on product_ratings.product_id = products.id
      inner join product_catalogs on product_catalogs.id = products.product_catalog_id
      where products.hot_product = 1 order by products.id LIMIT ${connection.escape(gethotProductAll.start_limit)}, ${connection.escape(gethotProductAll.end_limit)}`,
        (err, rows) => {
          if(rows) {
            if (err) {
              return err
            }
            else {
              connection.query(`select * FROM site_settings
              inner join currency_settings on site_settings.currency_id = currency_settings.id`, (err, currencysetting)=>{
                if(err) {
                    return err;
                } else {
                  for(i=0; i< rows.length; i++) {
                    rows[i].currencySymbol = currencysetting[0].currency_symbol; 
                  }
                  callback(err, rows)
                }
              });
            }
        } else {
          callback(err, config.nodata.nodataFound);
        }
        }
      )
    }
  };

module.exports = hostproductListModel;
