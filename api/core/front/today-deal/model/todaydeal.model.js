

const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let todaydealhomeModel = {};

todaydealhomeModel.gettodaydealHome
 = (getHomeDeal,callback) => {
    if (connection) {
      connection.query(`select products.id as productId, product_catalogs.product_name as productName,product_catalogs.main_image as productImage, products.sales_price as salesPrice, products.discount as discount, products.discount_type as discountType,today_deal.start_date as startDate, today_deal.end_date as endDate from products  
      inner join product_catalogs on product_catalogs.id = products.product_catalog_id
      inner join today_deal on today_deal.product_id = products.id
      where products.today_deal = 1 and today_deal.start_date = ${connection.escape(getHomeDeal.current_date)} order by products.id limit 4`,
        (err, rows) => {
          if(rows) { 
            if (err) {
              return err;
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
  
  todaydealhomeModel.gettodaydealHomeAll = (getHomeDealAll,callback) => {
    if (connection) {
      connection.query(`select products.id as productId, product_catalogs.product_name as productName, product_catalogs.main_image as productImage, products.sales_price as salesPrice, products.discount as  discount, products.discount_type as discountType,today_deal.start_date as startDate, today_deal.end_date as endDate, product_ratings.user_rating as userRating
      from products   
      inner join product_catalogs on product_catalogs.id = products.product_catalog_id
      inner join today_deal on today_deal.product_id = products.id
      left join product_ratings on products.id = product_ratings.product_id
      where products.today_deal = 1 and today_deal.start_date = ${connection.escape(getHomeDealAll.current_date)} order by products.id LIMIT ${connection.escape(getHomeDealAll.start_limit)}, ${connection.escape(getHomeDealAll.end_limit)}`,
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

module.exports = todaydealhomeModel;
