const mongoose = require('mongoose');
const Url = require('../models/urlModel');

const random_Letter_Generator = async () => {
  const All_letters_arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  // 用於檢查資料組成是否合規
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let number_contain = 0;
  let letter_contain = 0;
  let shortLetters = '';

  while (true) {
    // reset
    shortLetters = '';
    number_contain = 0;
    letter_contain = 0;

    for (let i = 0; i < 5; i++) {
      shortLetters += random_letter(All_letters_arr);

      numbers.forEach((el) => {
        if (shortLetters.includes(el)) {
          number_contain++;
        }
        return;
      });
      letters.forEach((el) => {
        if (shortLetters.includes(el)) {
          letter_contain++;
        }
      });
    }
    // target_data => 可能存在於資料庫中的重複shorten 目標data
    const target_data = await Url.find({ shorten: shortLetters });

    if (number_contain > 0 && letter_contain > 0 && target_data.length === 0) {
      //console.log(shortLetters);
      break;
    }
  }
  return shortLetters;
};

const random_letter = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

module.exports = random_Letter_Generator;
