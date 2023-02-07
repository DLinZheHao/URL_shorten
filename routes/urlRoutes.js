const express = require('express');
const router = express.Router();

const UrlController = require('../controller/urlController');

router.route('/').get(UrlController.start_page);
router.route('/shorten').post(UrlController.shorten_Url);

// 導向原始網站
router.route('/:shortenLetters').get(UrlController.enter_url);
module.exports = router;
