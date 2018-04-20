

const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let shopallModel = {};
  
shopallModel.getshopAll = (getShop ,callback) => {
    if (connection) {
      connection.query(`select * from products
      inner join product_catalogs on products.product_catalog_id = product_catalogs.id
      where product_catalogs.subcategory_id = ${connection.escape(getShop.sub_category_id)}`,
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
  
  shopallModel.getSortingProduct = (getsortingProduct ,callback) => {
    if (connection) {
      if(getsortingProduct.sort_status === 1) {  
        var sql = `
        select products.id as productId, product_catalogs.product_name as productName, product_catalogs.main_image as productImage, products.sales_price as salesPrice, products.discount as  discount, products.discount_type as discountType,today_deal.start_date as startDate, today_deal.end_date as endDate, product_ratings.user_rating as userRating
        from products   
        inner join product_catalogs on product_catalogs.id = products.product_catalog_id
        inner join today_deal on today_deal.product_id = products.id
        left join product_ratings on products.id = product_ratings.product_id
        where product_catalogs.subcategory_id = ${connection.escape(getsortingProduct.sub_category_id)} order by products.id desc`;
      } else if(getsortingProduct.sort_status === 2) {
        var sql = `
        select products.id as productId, product_catalogs.product_name as productName, product_catalogs.main_image as productImage, products.sales_price as salesPrice, products.discount as  discount, products.discount_type as discountType,today_deal.start_date as startDate, today_deal.end_date as endDate, product_ratings.user_rating as userRating
        from products   
        inner join product_catalogs on product_catalogs.id = products.product_catalog_id
        inner join today_deal on today_deal.product_id = products.id
        left join product_ratings on products.id = product_ratings.product_id
        where product_catalogs.subcategory_id = ${connection.escape(getsortingProduct.sub_category_id)} order by products.sales_price`;
      } else if(getsortingProduct.sort_status === 3) {
        var sql = `
        select products.id as productId, product_catalogs.product_name as productName, product_catalogs.main_image as productImage, products.sales_price as salesPrice, products.discount as  discount, products.discount_type as discountType,today_deal.start_date as startDate, today_deal.end_date as endDate, product_ratings.user_rating as userRating
        from products   
        inner join product_catalogs on product_catalogs.id = products.product_catalog_id
        inner join today_deal on today_deal.product_id = products.id
        left join product_ratings on products.id = product_ratings.product_id
        where product_catalogs.subcategory_id = ${connection.escape(getsortingProduct.sub_category_id)} order by products.sales_price desc`; 
      }
      connection.query(sql, function (err, rows) {
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
      });
    }
  };
  
module.exports = shopallModel;
