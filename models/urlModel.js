const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        original: {
            type: String,
            required: [true, '輸入資料沒有目標網址！']
        },
        shorten: {
            type: String,
            required: [true, '輸入資料沒有鎖短網址！']
        }
    }
)
const Url = mongoose.model('Url', urlSchema);
module.exports = Url;