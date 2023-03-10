const express = require('express');
const router = express.Router();

const UrlController = require('../controller/urlController');

router.route('/').get(UrlController.start_page);
router.route('/shorten').post(UrlController.shorten_Url);

// 導向原始網站
router.route('/:shortenLetters').get(UrlController.lead_to_original_URL);
module.exports = router;
