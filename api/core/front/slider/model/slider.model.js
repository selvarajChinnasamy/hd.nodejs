

const connection = require('../../../../../config/config');
var config = require('../../../../../config/config.json');
let getsliderModel = {};

getsliderModel.getSlider = (callback) => {
    if (connection) {
      connection.query(`select slider_settings.id as sliderId, slider_settings.slider_image as sliderImage FROM slider_settings`,
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
  

module.exports = getsliderModel;
