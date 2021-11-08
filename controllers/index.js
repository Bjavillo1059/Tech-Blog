const router = require('express').Router();
const apiRoutes = require('./api')
const globalRoutes = require('./global-routes');

router.use('/', globalRoutes);
router.use('/api', apiRoutes);

module.exports = router