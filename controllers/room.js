const Room = require('../models').Room;

module.exports = {
  list(req, res) {
    return Room
      .findAll()
      .then((Rooms) => res.status(200).send(Rooms))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Room
      .findById(req.params.id)
      .then((Room) => {
        if (!Room) {
          return res.status(404).send({
            message: 'Room Not Found',
          });
        }
        return res.status(200).send(Room);
      })
      .catch((error) => res.status(400).send(error));
  }
};