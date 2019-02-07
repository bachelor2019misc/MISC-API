const Type = require('../models').Type;

module.exports = {
  list(req, res) {
    return Type
      .findAll()
      .then((Types) => res.status(200).send(Types))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Type
      .findById(req.params.id)
      .then((Type) => {
        if (!Type) {
          return res.status(404).send({
            message: 'Type Not Found',
          });
        }
        return res.status(200).send(Type);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Type
      .create({
        WattTotal: req.body.WattTotal,
        Kelvin: req.body.Kelvin,
        Lumen: req.body.Lumen,
        Replace: req.body.Replace,
        BasePrice: req.body.BasePrice,
      })
      .then((Type) => res.status(201).send(Type))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Type
      .findById(req.params.id)
      .then(Type => {
        if (!Type) {
          return res.status(404).send({
            message: 'Type Not Found',
          });
        }
        return Type
          .update({ WattTotal: req.body.WattTotal,
            Kelvin: req.body.Kelvin,
            Lumen: req.body.Lumen,
            Replace: req.body.Replace,
            BasePrice: req.body.BasePrice }
            )
          .then(() => res.status(200).send(Type))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};