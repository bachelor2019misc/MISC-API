const BlueprintDot = require('../models').BlueprintDot;

module.exports = {
  list(req, res) {
    return BlueprintDot
      .findAll()
      .then((Blueprintdots) => res.status(200).send(Blueprintdots))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return BlueprintDot
      .findById(req.params.id)
      .then((BlueprintDot) => {
        if (!BlueprintDot) {
          return res.status(404).send({
            message: 'BlueprintDot Not Found',
          });
        }
        return res.status(200).send(BlueprintDot);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return BlueprintDot
      .create({
        xCoordinates: req.body.xCoordinates,
        yCoordinates: req.body.yCoordinates
      })
      .then((BlueprintDot) => res.status(201).send(BlueprintDot))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return BlueprintDot
      .findById(req.params.id)
      .then(BlueprintDot => {
        if (!BlueprintDot) {
          return res.status(404).send({
            message: 'BlueprintDot Not Found',
          });
        }
        return BlueprintDot
          .update({ xCoordinates: req.body.xCoordinates, yCoordinates: req.body.yCoordinates }
            )
          .then(() => res.status(200).send(BlueprintDot))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};