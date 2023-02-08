const mongoose = require('mongoose');
const Url = require('../models/urlModel');
const random_Letter_Generator = require('../utils/random_letter_generator');

exports.start_page = (req, res) => {
  res.status(200).render('index', {});
};

exports.shorten_Url = async (req, res) => {
  try {
    const inputURL = req.body.inputURL;
    const web_URL = await Url.findOne({ original: inputURL }).lean();
    //console.log(web_URL);
    if (!web_URL) {
      const shortenLetters = await random_Letter_Generator();
      const shortenURL = `http://localhost:3000/${shortenLetters}`;
      await Url.create({
        original: inputURL,
        shorten: shortenLetters,
      });
      res.render('result', { shortenURL });
    } else {
      const shortenURL = `http://localhost:3000/${web_URL.shorten}`;
      res.status(200).render('result', { shortenURL });
    }
  } catch (err) {
    console.error(err);
  }
};

exports.lead_to_original_URL = async (req, res) => {
  try {
    const shortenLetters = req.params.shortenLetters;
    const web_URL = await Url.findOne({ shorten: shortenLetters });
    if (!web_URL) {
      res.render('fail', {});
    } else {
      res.redirect(web_URL.original);
    }
  } catch (err) {
    console.error(err);
  }
};
