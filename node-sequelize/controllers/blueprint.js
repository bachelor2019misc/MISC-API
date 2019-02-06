const Blueprint = require('../models').Blueprint;

module.exports = {
  list(req, res) {
    return Blueprint
      .findAll()
      .then((Blueprints) => res.status(200).send(Blueprints))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Blueprint
      .findById(req.params.id)
      .then((Blueprint) => {
        if (!Blueprint) {
          return res.status(404).send({
            message: 'Blueprint Not Found',
          });
        }
        return res.status(200).send(Blueprint);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Blueprint
      .create()
      .then((Blueprint) => res.status(201).send(Blueprint))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Blueprint
      .findById(req.params.id)
      .then(Blueprint => {
        if (!Blueprint) {
          return res.status(404).send({
            message: 'Blueprint Not Found',
          });
        }
        return Blueprint
          .update()
          .then(() => res.status(200).send(Blueprint))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};