const mongoose = require('mongoose');

const ProductDataSchema = new mongoose.Schema({
  codigo: String,
  descricao: String,
  preco: String,
  data_cadastro: String,
});

module.exports = mongoose.model('Products', ProductDataSchema);
