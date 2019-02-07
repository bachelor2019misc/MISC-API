const ImageVessel = require('../models').ImageVessel;

module.exports = {
  list(req, res) {
    return ImageVessel
      .findAll()
      .then((ImageVessel) => res.status(200).send(ImageVessel))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return ImageVessel
      .findById(req.params.id)
      .then((ImageVessel) => {
        if (!ImageVessel) {
          return res.status(404).send({
            message: 'ImageVessel Not Found',
          });
        }
        return res.status(200).send(ImageVessel);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return ImageVessel
      .create({
        imagevesselname: req.body.imagevesselname,
        description: req.body.description,
        source: req.body.source,
      })
      .then((ImageVessel) => res.status(201).send(ImageVessel))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return ImageVessel
      .findById(req.params.id)
      .then(ImageVessel => {
        if (!ImageVessel) {
          return res.status(404).send({
            message: 'ImageVessel Not Found',
          });
        }
        return ImageVessel
          .update({ imagevesselname: req.body.imagevesselname, description: req.body.description, source: req.body.source }
            )
          .then(() => res.status(200).send(ImageVessel))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};