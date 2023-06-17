const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/', homeRoutes);
// Prefix all routes defined in the api directory with `/api`
router.use('/api', apiRoutes);

module.exports = router;
