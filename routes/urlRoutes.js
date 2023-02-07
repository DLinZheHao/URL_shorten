const express = require('express');
const router = express.Router();

const UrlController = require('../controller/urlController');

router.route('/').get(UrlController.start_page);

module.exports = router;