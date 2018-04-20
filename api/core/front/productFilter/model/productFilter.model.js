const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let productFilterModel = {};
const async = require("async");


productFilterModel.getproductFilter = (productId,callback) => {
    var datas=[];
    if (connection) {
        connection.query('SELECT `id`, `product_option_required`, `attribute_id` FROM `product_options` WHERE `product_id`=?',[productId],
            (err, rows1) => {
                if (rows1.length!=0) {
                    if (err) {
                        throw err
                    }
                    else {
                        async.each(rows1,
                            function (item, callback) {
                                connection.query('SELECT `id`, `attribute_name`, `attribute_type` FROM `attributes` WHERE `id`=?', [item.attribute_id],
                                    (err, rows) => {
                                        if (rows) {
                                            if (err) {
                                                throw err
                                            }
                                            else {
                                                async.each(rows,
                                                    function (item, callback) {
                                                        item['detail'] = [];
                                                        var sql = 'SELECT `product_id`, `product_option_id`,`product_option_value`, `product_option_quantity`, `product_option_price` FROM `product_option_details` WHERE `attribute_id`=?'
                                                        connection.query(sql, [item.id], (err, row) => {
                                                            if (err) {

                                                                callback();
                                                                return;

                                                            } else {
                                                                for (let i = 0; i < row.length; i++) {
                                                                    item['detail'].push(row[i]);
                                                                }
                                                            }
                                                            callback();

                                                        });

                                                    },
                                                    function (err, results) {
                                                        datas.push(rows);
                                                        callback(null, rows);
                                                    }
                                                )
                                            }
                                        }
                                    })
                            },
                            function (err, results) {
                                callback(null, datas);
                            }
                        )
                    }
                } else {
                    callback(err, config.nodata.nodataFound);
                }
            })
    }
}
module.exports = productFilterModel;
