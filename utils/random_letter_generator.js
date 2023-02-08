const mongoose = require('mongoose');
const Url = require('../models/urlModel');

const random_Letter_Generator = async () => {
  const letters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let shortLetters = '';

  while (true) {
    for (let i = 0; i < 5; i++) {
      shortLetters += random_letter(letters);
    }
    const boolean = await Url.find({ shorten: shortLetters });

    // 持續創建shortLetters 除非 沒有重複
    if (boolean.length === 0) break;
  }
  return shortLetters;
};

const random_letter = (str) => {
  const index = Math.floor(Math.random() * str.length);
  return str[index];
};

module.exports = random_Letter_Generator;
