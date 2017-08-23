const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {type: String,
          required: true,
          unique: true},
  genre: {type: String},
  seasons: {type: String}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
