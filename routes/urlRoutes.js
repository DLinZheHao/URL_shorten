const express = require('express');
const router = express.Router();

const UrlController = require('../controller/urlController');

router.route('/').get(UrlController.start_page);
router.route('/shorten').post(UrlController.shorten_Url);

module.exports = router;