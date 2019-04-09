const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);

// Retrieve models
const User = require('../models').User;
const Vessel = require('../models').Vessel;
const Room = require('../models').Room;
const Product = require('../models').Product;
const Subproduct = require('../models').Subproduct;
const Blueprint = require('../models').Blueprint;
const Blueprintdot = require('../models').BlueprintDot;
const Roomdot = require('../models').RoomDot;
const Currency = require('../models').Currency;

// Add a user
router.post('/add', function(req, res) {
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
      res.status(400).send({msg: 'Please enter username and password.'})
    } else {
      User
        .create({
          username: req.body.username,
          password: req.body.password
        })
        .then((user) => res.status(201).send(user))
        .catch((error) => {
          console.log(error);
          res.status(400).send(error);
        });
    }
  });

  // Edit user - requires login
  router.put('/user/:username', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      if (req.user.username == req.params.username) {
      User
      .find({
        where: {
          username : req.params.username
        }
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        if ( req.body.password == "") {
        user
        .update({
          username: req.body.username
        }, { where: {id: req.params.id}})
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
      }
      else if (req.body.username == "") {
        user
        .update({
          password: req.body.password
        }, { where: {id: req.params.id}})
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
      }
      else {
        user
        .update({
          username: req.body.username,
          password: req.body.password
        }, { where: {id: req.params.id}})
        .then(() => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
      }
      })
    } else {
      return res.status(403).send({success: false, msg: 'You cannot change this user!'});
    }
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Login to a registered user
  router.post('/login', function(req, res) {
    User
        .find({
          where: {
            username: req.body.username
          }
        })
        .then((user) => {
          if (!user) {
            return res.status(401).send({
              message: 'Authentication failed. User not found.',
            });
          }
          user.comparePassword(req.body.password, (err, isMatch) => {
            if(isMatch && !err) {
              var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: "2 days"});
              jwt.verify(token, 'nodeauthsecret', function(err, data){
                console.log(err, data);
              })
              res.json({success: true, token: 'JWT ' + token});
            } else {
              res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
            }
          })
        })
        .catch((error) => res.status(400).send(error));
  });

  // Add vessel - requires login
  /*router.post('/vessel', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
        .create({
         title: req.body.title,
         description: req.body.description,
         hidden: req.body.hidden,
         image: req.body.image
         
        })
        .then((vessel) => res.status(201).send(vessel))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });*/

  // Edit vessel - requires login
  router.put('/vessel/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
      .findById(req.params.id)
      .then(vessel => {
        if (!vessel) {
          return res.status(404).send({
            message: 'Vessel Not Found',
          });
        }
      vessel
        .update({
         title: req.body.title,
         description: req.body.description,
         hidden: req.body.hidden,
         image: req.body.image
        }, { where: {idVessel: req.params.id}})
        .then(() => res.status(200).send(vessel))
        .catch((error) => res.status(400).send(error));
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Edit blueprintdot - requires login
  router.put('/blueprintdot/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Blueprintdot
      .findById(req.params.id)
      .then(blueprintdot => {
        if (!blueprintdot) {
          return res.status(404).send({
            message: 'Blueprintdot Not Found',
          });
        }
        blueprintdot
        .update({
         xCoordinates: req.body.xCoordinates,
         yCoordinates: req.body.yCoordinates,
         idVessel: req.body.idVessel
        }, { where: {idBlueprint: req.params.id}})
        .then(() => res.status(200).send(blueprintdot))
        .catch((error) => res.status(400).send(error));
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  //Get blueprint by vesselid (for testing purposes)
  router.get('/blueprintbyvesselid/:id', passport.authenticate('jwt', { session: false}), function(req, res) { 
    var token = getToken(req.headers); 
    if (token) { 
      Vessel 
      .findById(req.params.id) 
      .then(vessel => { 
        if (!vessel) { 
          return res.status(404).send({ 
            message: 'Vessel Not Found', 
          }); 
        } 
      Blueprint.findAll({ 
        where: { 
          idBlueprint: vessel.idBlueprint 
        } 
      }).then((blueprint) => res.status(200).send(blueprint))
      .catch((error) => res.status(400).send(error));
    }) 
    } else { 
      return res.status(403).send({success: false, msg: 'Unauthorized.'}); 
    } 
  }); 
 

  // Add product - requires login
  router.post('/product', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Product
        .create({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          hidden: req.body.hidden,
          link: req.body.link
        })
        .then((product) => res.status(201).send(product))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Add subproduct - requires login
  router.post('/subproduct', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Subproduct
        .create({
          title: req.body.title,
          description: req.body.description,
          idProduct: req.body.idProduct,
          watt: req.body.watt,
          kelvin: req.body.kelvin,
          lumen: req.body.lumen,
          price: req.body.price,
          productNumber: req.body.productNumber

        })
        .then((subproduct) => res.status(201).send(subproduct))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Edit product - requires login
  router.put('/product/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Product
      .findById(req.params.id)
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
      product
        .update({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          hidden: req.body.hidden,
          link: req.body.link
        }, { where: {idProduct: req.params.id}})
        .then(() => res.status(200).send(product))
        .catch((error) => res.status(400).send(error));
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });
  
  // Edit subproduct - requires login
  router.put('/subproduct/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Subproduct
      .findById(req.params.id)
      .then(subproduct => {
        if (!subproduct) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
      subproduct
        .update({
          title: req.body.title,
          description: req.body.description,
          idProduct: req.body.idProduct,
          watt: req.body.watt,
          kelvin: req.body.kelvin,
          lumen: req.body.lumen,
          price: req.body.price,
          productNumber: req.body.productNumber
        }, { where: {idSubproduct: req.params.id}})
        .then(() => res.status(200).send(subproduct))
        .catch((error) => res.status(400).send(error));
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Get subproducts by idProduct
  router.get('/subproductbyidproduct/:id', function(req, res) { 
    Product 
    .findById(req.params.id) 
    .then(product => { 
      if (!product) { 
        return res.status(404).send({ 
          message: 'Product Not Found', 
        }); 
      } 
    Subproduct.findAll({
      where: { 
        idProduct: req.params.id 
      } 
    }).then((subproduct) => res.status(200).send(subproduct))
    .catch((error) => res.status(400).send(error));
  }) 
});

  // Edit room - requires login
  router.put('/room/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Room
      .findById(req.params.id)
      .then(room => {
        if (!room) {
          return res.status(404).send({
            message: 'Room Not Found',
          });
        }
      room
        .update({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image
        }, { where: {idRoom: req.params.id}})
        .then(() => res.status(200).send(room))
        .catch((error) => res.status(400).send(error));
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Add blueprintdot & room - requires login
  router.post('/blueprintdot', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Room
        .create({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image
        })
        .then((room) => {
          Blueprintdot
        .create({
          xCoordinates: req.body.xCoordinates,
          yCoordinates: req.body.yCoordinates,
          idVessel: req.body.idVessel,
          idRoom: room.idRoom
        })
        .then((vessel) => res.sendStatus(201))
        .catch((error) => res.sendStatus(400));
      }); 
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Add roomdot - requires login
  router.post('/roomdot', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Roomdot
        .create({
          xCoordinates: req.body.xCoordinates,
          yCoordinates: req.body.yCoordinates,
          idRoom: req.body.idRoom,
          idProduct: req.body.idProduct
        })
        .then((roomdot) => res.status(201).send(roomdot))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  //Get all blueprint dots by roomid
  router.get('/blueprintdotbyidroom/:id', function(req, res) { 
      Room 
      .findById(req.params.id) 
      .then(room => { 
        if (!room) { 
          return res.status(404).send({ 
            message: 'Room Not Found', 
          }); 
        } 
      Blueprintdot.findAll({
        where: { 
          idRoom: req.params.id 
        } 
      }).then((blueprintdot) => res.status(200).send(blueprintdot))
      .catch((error) => res.status(400).send(error));
    }) 
  });

  //Get all roomdots by roomid
  router.get('/roomdotbyidroom/:id', function(req, res) { 
    Room 
    .findById(req.params.id) 
    .then(room => { 
      if (!room) { 
        return res.status(404).send({ 
          message: 'Room Not Found', 
        }); 
      } 
    Roomdot.findAll({
      where: { 
        idRoom: req.params.id 
      } 
    }).then((roomdot) => res.status(200).send(roomdot))
    .catch((error) => res.status(400).send(error));
  }) 
});

  // Add blueprint & vessel - requires login
  router.post('/vessel', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Blueprint
        .create({
          image: req.body.imageBlueprint
        })
        .then(blueprint => { 
          Vessel
        .create({
         title: req.body.title,
         description: req.body.description,
         hidden: req.body.hidden,
         image: req.body.imageVessel,
         idBlueprint: blueprint.idBlueprint
        })
        .then((vessel) => res.sendStatus(201))
        .catch((error) => res.sendStatus(400));
      });      
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  //Get all blueprint dots by vesselid
  router.get('/blueprintdotbyidvessel/:id', function(req, res) { 
      Vessel 
      .findById(req.params.id) 
      .then(vessel => { 
        if (!vessel) { 
          return res.status(404).send({ 
            message: 'Vessel Not Found', 
          }); 
        } 
      Blueprintdot.findAll({ 
        where: { 
          idVessel: req.params.id 
        } 
      }).then((blueprintdot) => res.status(200).send(blueprintdot))
      .catch((error) => res.status(400).send(error));
    })
  }); 

  // Edit blueprint - requires login
  router.put('/blueprint/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Blueprint
      .findById(req.params.id)
      .then(blueprint => {
        if (!blueprint) {
          return res.status(404).send({
            message: 'Blueprint Not Found',
          });
        }
      blueprint
        .update({
          image: req.body.image
        }, { where: {idBlueprint: req.params.id}})
        .then(() => res.status(200).send(blueprint))
        .catch((error) => res.status(400).send(error));
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  // Add currency - requires login
  router.post('/currency', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Currency
        .create({
          name: req.body.name,
          value: req.body.value
        })
        .then((currency) => res.status(201).send(currency))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

   // Edit currency - requires login
   router.put('/currency/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Currency
      .findById(req.params.id)
      .then(currency => {
        if (!currency) {
          return res.status(404).send({
            message: 'Currency Not Found',
          });
        }
      currency
        .update({
          name: req.body.name,
          value: req.body.value
        }, { where: {idCurrency: req.params.id}})
        .then(() => res.status(200).send(currency))
        .catch((error) => res.status(400).send(error));
      })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });


  //Retrieve token from the Authorization header
  getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  module.exports = router;