const Roomrelationdot = require('../models').Roomrelationdot;

module.exports = {
  list(req, res) {
    return Roomrelationdot
      .findAll()
      .then((Roomrelationdots) => res.status(200).send(Roomrelationdots))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Roomrelationdot
      .findById(req.params.id)
      .then((Roomrelationdot) => {
        if (!Roomrelationdot) {
          return res.status(404).send({
            message: 'Roomrelationdot Not Found',
          });
        }
        return res.status(200).send(Roomrelationdot);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Roomrelationdot
      .create({
        Roomrelationdotname: req.body.Roomrelationdotname,
        description: req.body.description,
        hidden: req.body.hidden,
      })
      .then((Roomrelationdot) => res.status(201).send(Roomrelationdot))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Roomrelationdot
      .findById(req.params.id)
      .then(Roomrelationdot => {
        if (!Roomrelationdot) {
          return res.status(404).send({
            message: 'Roomrelationdot Not Found',
          });
        }
        return Roomrelationdot
          .update({ Roomrelationdotname: req.body.Roomrelationdotname, description: req.body.description, hidden: req.body.hidden }
            )
          .then(() => res.status(200).send(Roomrelationdot))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};