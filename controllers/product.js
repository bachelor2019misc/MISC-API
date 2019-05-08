const Product = require('../models').Product;

module.exports = {
  list(req, res) {
    return Product
      .findAll()
      .then((Products) => res.status(200).send(Products))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Product
      .findById(req.params.id)
      .then((Product) => {
        if (!Product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
        return res.status(200).send(Product);
      })
      .catch((error) => res.status(400).send(error));
  }
};