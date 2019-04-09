const Currency = require('../models').Currency;

module.exports = {
  list(req, res) {
    return Currency
      .findAll()
      .then((Currencies) => res.status(200).send(Currencies))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Currency
      .findById(req.params.id)
      .then((Currency) => {
        if (!Currency) {
          return res.status(404).send({
            message: 'Currency Not Found',
          });
        }
        return res.status(200).send(Currency);
      })
      .catch((error) => res.status(400).send(error));
  },
};