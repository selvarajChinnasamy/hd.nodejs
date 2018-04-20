const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let productcatalogsModel = {};

productcatalogsModel.getproductcatalogs = (callback) => {
    if (connection) {
      connection.query(`select product_catalogs.id as productId, product_catalogs.product_name as productName, product_catalogs.product_description as productDescription, product_catalogs.main_image as mainImage, product_catalogs.product_code as productCode, product_catalogs.product_upc as productUPC, product_catalogs.product_ean as productEAN, product_catalogs.product_jan as productJAN, product_catalogs.product_jan as productJAN, product_catalogs.product_jan as productJAN, product_catalogs.product_isbn as productISBN, product_catalogs.product_mpn as productMPN, product_catalogs.product_width as productWidth, product_catalogs.product_weight as productWeight, categoryGroups.id as categoryGroupId, categoryGroups.id as categoryGroupId, categoryGroups.category_group_name as categoryGroupName, categoryGroups.category_group_image as categoryGroupImage, categories.id as categoryId, categories.category_name as categoryName, categories.category_image as categoryImage, subCategory.id as subcategoryId, subCategory.subcategory_name as subcategoryName, brands.id as brandId, brands.brand_name as brandName, brands.brand_logo as brandLogo from product_catalogs 
      inner join category_groups as categoryGroups on categoryGroups.id = product_catalogs.category_group_id
      inner join categories as categories on categories.id = product_catalogs.category_id
      inner join sub_categories as subCategory on subCategory.id = product_catalogs.subcategory_id
      inner join brands as brands on brands.id = product_catalogs.brand_id`,
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

module.exports = productcatalogsModel;
