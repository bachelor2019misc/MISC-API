const Imageproduct = require('../models').Imageproduct;

module.exports = {
  list(req, res) {
    return Imageproduct
      .findAll()
      .then((Imageproducts) => res.status(200).send(Imageproducts))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Imageproduct
      .findById(req.params.id)
      .then((Imageproduct) => {
        if (!Imageproduct) {
          return res.status(404).send({
            message: 'Imageproduct Not Found',
          });
        }
        return res.status(200).send(Imageproduct);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Imageproduct
      .create({
        ImageproductName: req.body.ImageproductName,
        description: req.body.description,
        source: req.body.source,
      })
      .then((Imageproduct) => res.status(201).send(Imageproduct))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Imageproduct
      .findById(req.params.id)
      .then(Imageproduct => {
        if (!Imageproduct) {
          return res.status(404).send({
            message: 'Imageproduct Not Found',
          });
        }
        return Imageproduct
          .update({ ImageproductName: req.body.ImageproductName,
            description: req.body.description,
            source: req.body.source }
            )
          .then(() => res.status(200).send(Imageproduct))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};