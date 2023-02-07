let store_generating_record = []

const random_Letter_Generator = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let shortURL = '';

    // 先生成一組資料 如果生成過的shortURL 存在於 store_generating_record 重新生成
    do {
        for(let i = 0; i<5; i++){
            shortURL += random_letter(letters);
        }
    }while(store_generating_record.includes(shortURL) === true);

    store_generating_record.push(shortURL);

    return shortURL;
}

const random_letter = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
} 
