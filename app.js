const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const exhbs = require('express-handlebars');

const dotenv = require('dotenv');

// 線路
const Url_router = require('./routes/urlRoutes');

// data parse
app.use(bodyParser.urlencoded({ extended: true }));

// public folder read
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// 最後安全網(錯誤偵測)
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection! Shutting down... ');
  process.exit(1);
});

mongoose.set('strictQuery', true);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config.env' });
}

// config: 處理data連接url
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// 連接資料庫
mongoose
  //.connect(process.env.DATABASE_LOCAL)//
  .connect(DB, {
    useNewUrlParser: true,
  });

// 資料庫連線狀況處理
const db = mongoose.connection;

db.on('error', () => {
  console.log('Error connecting');
  process.exit(1);
});

db.once('open', () => {
  console.log('DB connection successfully established');
});

app.use('/', Url_router);

// 監聽伺服器
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});

// unhandled rejection
// 可能發生程式以外的 問題 例如 databse 連接問題
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection! Shutting down... ');
  server.close(() => {
    process.exit(1);
  });
});
