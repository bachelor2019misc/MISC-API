const Imageblueprint = require('../models').Imageblueprint;

module.exports = {
  list(req, res) {
    return Imageblueprint
      .findAll()
      .then((Imageblueprints) => res.status(200).send(Imageblueprints))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Imageblueprint
      .findById(req.params.id)
      .then((Imageblueprint) => {
        if (!Imageblueprint) {
          return res.status(404).send({
            message: 'Imageblueprint Not Found',
          });
        }
        return res.status(200).send(Imageblueprint);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Imageblueprint
      .create({
        ImageblueprintName: req.body.ImageblueprintName,
        description: req.body.description,
        source: req.body.source,
      })
      .then((Imageblueprint) => res.status(201).send(Imageblueprint))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Imageblueprint
      .findById(req.params.id)
      .then(Imageblueprint => {
        if (!Imageblueprint) {
          return res.status(404).send({
            message: 'Imageblueprint Not Found',
          });
        }
        return Imageblueprint
          .update({ ImageblueprintName: req.body.ImageblueprintName,
            description: req.body.description,
            source: req.body.source }
            )
          .then(() => res.status(200).send(Imageblueprint))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};