const mongoose = require('mongoose');

const dbConfig =
  'mongodb+srv://Tolfo:carros22@cluster0.fw2m77w.mongodb.net/products?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
