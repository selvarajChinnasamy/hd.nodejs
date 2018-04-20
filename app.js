const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

/* Middleware */
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Orgin', '*');
    req.header('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./api/core/admin/category-groups/routes/categorygroup')(app);

require('./api/core/admin/categories/routes/categories')(app);

require('./api/core/admin/product-catalogs/routes/productcatalogs')(app);

require('./api/core/admin/products/routes/product')(app);

require('./api/core/admin/product-details/routes/productdetail')(app);

require('./api/core/front/today-deal/routes/todaydeal')(app);

require('./api/core/front/category-group-list/routes/categorygrouplist')(app);

require('./api/core/front/hot-product/routes/hotproductlist')(app);

require('./api/core/front/category-menu/routes/categorymenu')(app);

require('./api/core/front/featured-brand-list/routes/featuredbrand')(app);

require('./api/core/front/slider/routes/slider')(app);

require('./api/core/front/sort-product/routes/sortproduct')(app);

require('./api/core/front/categorymenu/routes/categorymenu')(app);

require('./api/core/front/featuredbrandlist/routes/featuredbrand')(app);

require('./api/core/front/productFilter/routes/productFilter.routes')(app);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status | 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;