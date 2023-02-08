const mongoose = require('mongoose');
const Url = require('../models/urlModel');

const random_Letter_Generator = async () => {
  const letters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  while (true) {
    // 重設生成的五個字母
    let shortLetters = '';
    for (let i = 0; i < 5; i++) {
      shortLetters += random_letter(letters);
    }
    // target_data => 可能存在於資料庫中的重複shorten 目標data
    const target_data = await Url.find({ shorten: shortLetters });

    // 持續創建shortLetters,除非沒有重複 => target_data的資料長度為零
    if (target_data.length === 0) break;
  }
  return shortLetters;
};

const random_letter = (str) => {
  const index = Math.floor(Math.random() * str.length);
  return str[index];
};

module.exports = random_Letter_Generator;
