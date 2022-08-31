const router = require('express').Router();

const categoryRoutes = require('./category-routes.js');

router.use('/category', categoryRoutes);

module.exports = router;