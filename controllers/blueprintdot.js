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
  }

};