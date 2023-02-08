const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: [true, '輸入資料沒有目標網址！'],
    unique: true,
  },
  shorten: {
    type: String,
    required: [true, '輸入資料沒有短網址！'],
    unique: true,
  },
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
