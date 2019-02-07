const Imageroom = require('../models').Imageroom;

module.exports = {
  list(req, res) {
    return Imageroom
      .findAll()
      .then((Imagerooms) => res.status(200).send(Imagerooms))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Imageroom
      .findById(req.params.id)
      .then((Imageroom) => {
        if (!Imageroom) {
          return res.status(404).send({
            message: 'Imageroom Not Found',
          });
        }
        return res.status(200).send(Imageroom);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Imageroom
      .create({
        ImageroomName: req.body.ImageroomName,
        description: req.body.description,
        source: req.body.source,
      })
      .then((Imageroom) => res.status(201).send(Imageroom))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Imageroom
      .findById(req.params.id)
      .then(Imageroom => {
        if (!Imageroom) {
          return res.status(404).send({
            message: 'Imageroom Not Found',
          });
        }
        return Imageroom
          .update({ ImageroomName: req.body.ImageroomName,
            description: req.body.description,
            source: req.body.source }
            )
          .then(() => res.status(200).send(Imageroom))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};