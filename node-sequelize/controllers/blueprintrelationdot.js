const Blueprintrelationdot = require('../models').Blueprintrelationdot;

module.exports = {
  list(req, res) {
    return Blueprintrelationdot
      .findAll()
      .then((Blueprintrelationdots) => res.status(200).send(Blueprintrelationdots))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Blueprintrelationdot
      .findById(req.params.id)
      .then((Blueprintrelationdot) => {
        if (!Blueprintrelationdot) {
          return res.status(404).send({
            message: 'Blueprintrelationdot Not Found',
          });
        }
        return res.status(200).send(Blueprintrelationdot);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Blueprintrelationdot
      .create({
        Blueprintrelationdotname: req.body.Blueprintrelationdotname,
        description: req.body.description,
        hidden: req.body.hidden,
      })
      .then((Blueprintrelationdot) => res.status(201).send(Blueprintrelationdot))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Blueprintrelationdot
      .findById(req.params.id)
      .then(Blueprintrelationdot => {
        if (!Blueprintrelationdot) {
          return res.status(404).send({
            message: 'Blueprintrelationdot Not Found',
          });
        }
        return Blueprintrelationdot
          .update({ Blueprintrelationdotname: req.body.Blueprintrelationdotname, description: req.body.description, hidden: req.body.hidden }
            )
          .then(() => res.status(200).send(Blueprintrelationdot))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};