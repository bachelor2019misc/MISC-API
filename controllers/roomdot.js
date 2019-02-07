const Roomdot = require('../models').Roomdot;

module.exports = {
  list(req, res) {
    return Roomdot
      .findAll()
      .then((Roomdots) => res.status(200).send(Roomdots))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Roomdot
      .findById(req.params.id)
      .then((Roomdot) => {
        if (!Roomdot) {
          return res.status(404).send({
            message: 'Roomdot Not Found',
          });
        }
        return res.status(200).send(Roomdot);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Roomdot
      .create({
        xCoordinates: req.body.xCoordinates,
        yCoordinates: req.body.yCoordinates,
      })
      .then((Roomdot) => res.status(201).send(Roomdot))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Roomdot
      .findById(req.params.id)
      .then(Roomdot => {
        if (!Roomdot) {
          return res.status(404).send({
            message: 'Roomdot Not Found',
          });
        }
        return Roomdot
          .update({ xCoordinates: req.body.xCoordinates, yCoordinates: req.body.yCoordinates }
            )
          .then(() => res.status(200).send(Roomdot))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};