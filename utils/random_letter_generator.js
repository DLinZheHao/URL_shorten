const mongoose = require('mongoose');
const Url = require('../models/urlModel');

module.exports = function RandomLetter() {
  const alphabets =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  const getRandomChar = (string) => {
    const index = Math.floor(Math.random() * string.length);
    return string.charAt(index);
  };

  const setLetter = (string, limit) => {
    if (!limit) limit = 5;
    let result = '';
    for (let i = 0; i < limit; ++i) {
      result += getRandomChar(string);
    }
    return result;
  };

  const check_compliance = (string) => {
    const numbers = '0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let number_contain = 0;
    let letter_contain = 0;

    for (let i = 0; i < string.length; i++) {
      // 檢查字母及數字
      if (numbers.indexOf(string[i])) number_contain++;
      else if (letters.indexOf(string)) letter_contain++;

      if (number_contain > 0 && letter_contain > 0) break;
    }
    // 檢查成功
    if (number_contain > 0 && letter_contain > 0) {
      return true;
    }
    // 檢查失敗
    return false;
  };

  return {
    generate: async function () {
      let i = 0;
      // 避免無窮迴圈，產生短網址應該到retry某個次數就要停止
      while (i <= 20) {
        const shortLetter = setLetter(alphabets);

        // 更換你的return logic
        const target_data = await Url.find({ shorten: shortLetter });
        const check = check_compliance(shortLetter);

        if (check && target_data.length === 0) {
          return shortLetter;
        }
        ++i;
      }
      return null;
    },
  };
};
