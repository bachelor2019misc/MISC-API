const Subproduct = require('../models').Subproduct;

module.exports = {
  list(req, res) {
    return Subproduct
      .findAll()
      .then((Subproducts) => res.status(200).send(Subproducts))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Subproduct
      .findById(req.params.id)
      .then((Subproduct) => {
        if (!Subproduct) {
          return res.status(404).send({
            message: 'Subproduct Not Found',
          });
        }
        return res.status(200).send(Subproduct);
      })
      .catch((error) => res.status(400).send(error));
  }
};