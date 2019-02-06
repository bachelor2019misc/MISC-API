const Blueprintdot = require('../models').Blueprintdot;

module.exports = {
  list(req, res) {
    return Blueprintdot
      .findAll()
      .then((Blueprintdots) => res.status(200).send(Blueprintdots))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Blueprintdot
      .findById(req.params.id)
      .then((Blueprintdot) => {
        if (!Blueprintdot) {
          return res.status(404).send({
            message: 'Blueprintdot Not Found',
          });
        }
        return res.status(200).send(Blueprintdot);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Blueprintdot
      .create({
        xCoordinates: req.body.xCoordinates,
        yCoordinates: req.body.yCoordinates,
      })
      .then((Blueprintdot) => res.status(201).send(Blueprintdot))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Blueprintdot
      .findById(req.params.id)
      .then(Blueprintdot => {
        if (!Blueprintdot) {
          return res.status(404).send({
            message: 'Blueprintdot Not Found',
          });
        }
        return Blueprintdot
          .update({ xCoordinates: req.body.xCoordinates, yCoordinates: req.body.yCoordinates }
            )
          .then(() => res.status(200).send(Blueprintdot))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};