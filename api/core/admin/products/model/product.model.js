const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let productModel = {};

productModel.getproduct = (callback) => {
    if (connection) {
      connection.query(`select products.id as productId, products.actual_price as actualPrice, products.sales_price as salesPrice, products.quantity as quantity, products.minimum_quantity as minimumQuantity, products.maximum_quantity as maximumQuantity, products.hot_product as hotProduct, products.featured_product as featuredProduct, products.free_shipping as freeShipping, products.discount as discount, products.discount_type as discountType, products.total_view as totalReview, productCatalog.product_name as productName, productCatalog.product_description as productDescription, productCatalog.main_image as mainImage, productCatalog.product_code as productCode,productCatalog.product_upc as productUPC, productCatalog.product_ean as ProductEAN, productCatalog.product_jan as productJAN,productCatalog.product_jan as productJAN, productCatalog.product_isbn as productISBN, productCatalog.product_mpn as productMPN, productCatalog.product_width as productWidth, productCatalog.product_weight as productWeight, shippingSetting.id as shippingId, shippingSetting.shipping_name as shippingName, shippingSetting.shipping_value as shippingValue,lowStock.id as lowStockId, lowStock.low_stock_name as lowStockName, productType.id as productTypeId, productType.product_type as productType, categoryGroup.id as categoryGroupId, categoryGroup.category_group_name as categoryGroupName, categoryGroup.category_group_image as categoryGroupImage, category.id as categoryId, category.category_name as categoryName, category.category_image as categoryImage, subCategory.id as subcategoryId, subCategory.subcategory_name as subCategoryName, subcategory.subcategory_image as subCategoryImage, brand.id as brandId, brand.brand_name as brandName, brand.brand_logo as brandLogo from products
      inner join product_catalogs as productCatalog on productCatalog.id = products.product_catalog_id
      inner join shipping_settings as shippingSetting on shippingSetting.id = products.shipping_setting_id
      inner join low_stock_settings as lowStock on lowStock.id = products.low_setting_setting_id
      inner join product_type as productType on productType.id = products.product_type_id
      inner join category_groups as categoryGroup on categoryGroup.id = productCatalog.category_group_id
      inner join categories as category on category.id = productCatalog.category_id
      inner join sub_categories as subCategory on subCategory.id = productCatalog.subcategory_id
      inner join brands as brand on brand.id = productCatalog.brand_id`,
        (err, rows) => {
          if (err) {
            throw err
          }
          else {
            callback(err, config.nodata.nodataFound);
          }
        }
      )
    }
  };

module.exports = productModel;
