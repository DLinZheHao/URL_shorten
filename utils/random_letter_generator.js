let store_generating_record = [];

const random_Letter_Generator = () => {
  const letters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let shortLetters = '';

  // 先生成一組資料 如果生成過的shortLetters 存在於 store_generating_record 重新生成
  do {
    for (let i = 0; i < 5; i++) {
      shortLetters += random_letter(letters);
    }
  } while (store_generating_record.includes(shortLetters) === true);

  store_generating_record.push(shortLetters);

  return shortLetters;
};

const random_letter = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

module.exports = random_Letter_Generator;
