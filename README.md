# URL_shorten

![](https://i.imgur.com/TZqprnU.jpg)

## 功能
<ul>
    <li>輸入網址獲得縮短網址</li>
    <li>使用網站產生所段網址前往網址</li>
</ul>


## 使用說明
1.請先確保使用主機擁有node.js環境及npm

    node -v    // v18.12.1 會顯示版本
    npm -v     // 8.19.2

2.將專案複製至本地

    git clone https://github.com/DLinZheHao/URL_shorten.git
    
3.開啟終端機進入專案資料夾，並安裝環境套件

    npm install

4.設定專案環境變數

<li>於資料夾中新增 config.env</li>
<li>檔案樣式請照下填入,password</li>

<br>

<PASSWORD>的部分 請維持原樣 app.js中會自動帶入密碼
    
    NODE_ENV=development
    PORT=3000
    DATABASE=mongodb+srv://<username>:<PASSWORD>....
    DATABASE_PASSWORD=<your password>  // 你的MongoDB連結

5.執行程式
    
    npm run start
    
6. 成功時終端機會顯示
    
        listening on port 3000!
        DB connection successfully established
7.瀏覽器輸入 127.0.0.1:3000 or http://localhost:3000 進入網站
    
## 環境插件
    // 後端
        "body-parser": "^1.20.1",
        "express": "^4.18.2",
        "express-handlebars": "^3.0.0",
        "mongoose": "^6.9.1"
        "dotenv": "^16.0.3"

    // 前端
        bootstrap@5.3.0
    
    // 開發插件
        "eslint": "^8.33.0",
        "eslint-config-airbnb": "^19.0.4",
        "eslint-config-prettier": "^8.6.0",
        "eslint-plugin-import": "^2.27.5",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^4.2.1",
        "eslint-plugin-react": "^7.32.2",
        "prettier": "^2.8.3"
