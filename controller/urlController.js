const mongoose = require('mongoose');
const Url = require('../models/urlModel');
const random_Letter_Generator = require('../utils/random_letter_generator');

exports.start_page = (req, res) => {
  res.status(200).render('index', {});
};

exports.shorten_Url = async (req, res) => {
  const inputURL = req.body.inputURL;
  const web_URL = await Url.findOne({ original: inputURL }).lean();
  console.log(web_URL);
  if (!web_URL) {
    const shortenLetters = random_Letter_Generator();
    const shortenURL = `http://localhost:3000/${shortenLetters}`;
    Url.create({
      original: shortenURL,
      shorten: shortenLetters,
    });
    res.render('result', { shortenURL });
  } else {
    const shortenURL = `http://localhost:3000/${record.shorten}`;
    res.status(200).render('result', { shortenURL });
  }
};
