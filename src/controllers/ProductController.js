const Products = require('../models/ProductData');

module.exports = {
  async read(request, response) {
    const productList = await Products.find();

    return response.json(productList);
  },

  async create(request, response) {
    const { codigo, descricao, preco, data_cadastro } = request.body;

    if (!codigo || !descricao || !preco || !data_cadastro) {
      return response.status(401).json({
        error:
          'Algum(uns) dos campos está inválido, por favor verifique se preencheu tudo!',
      });
    }

    const productCreate = await Products.create({
      codigo,
      descricao,
      preco,
      data_cadastro,
    });

    return response.json(productCreate);
  },

  async delete(request, response) {
    const { id } = request.params;

    const productDelete = await Products.findOneAndDelete({ _id: id });

    if (productDelete) {
      return response.json(productDelete);
    }

    return response.status(401).json({
      error: 'Não foi possível deletar o seu registro!',
    });
  },

  async update(request, response) {
    const { id } = request.params;
    const { codigo, descricao, preco, data_cadastro } = request.body;

    const productUpdate = await Products.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          codigo: codigo,
          descricao: descricao,
          preco: preco,
          data_cadastro: data_cadastro,
        },
        returnNewDocument: true,
      }
    );

    if (productUpdate) {
      return response.json(productUpdate);
    }

    return response
      .status(401)
      .json({ err: 'Não foi possível atualizar o produto!' });
  },
};
