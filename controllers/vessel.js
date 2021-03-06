const Vessel = require('../models').Vessel;

module.exports = {
  list(req, res) {
    return Vessel
      .findAll()
      .then((Vessels) => res.status(200).send(Vessels))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Vessel
      .findById(req.params.id)
      .then((Vessel) => {
        if (!Vessel) {
          return res.status(404).send({
            message: 'Vessel Not Found',
          });
        }
        return res.status(200).send(Vessel);
      })
      .catch((error) => res.status(400).send(error));
  }
};