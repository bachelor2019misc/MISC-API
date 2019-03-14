const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').User;
const Vessel = require('../models').Vessel;

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

  /*router.get('/vessel', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
        .findAll()
        .then((vessels) => res.status(200).send(vessels))
        .catch((error) => { res.status(400).send(error); });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  }); */

  router.post('/vessel', passport.authenticate('jwt', { session: false}), function(req, res) {
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
  });

  router.post('/imagevessel', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
        .create({
         vesselname: req.body.vesselname,
         description: req.body.description,
         hidden: req.body.hidden
        })
        .then((vessel) => res.status(201).send(vessel))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.post('/imagevessel', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
        .create({
         vesselname: req.body.vesselname,
         description: req.body.description,
         hidden: req.body.hidden
        })
        .then((vessel) => res.status(201).send(vessel))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.post('/room', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
        .create({
         vesselname: req.body.vesselname,
         description: req.body.description,
         hidden: req.body.hidden
        })
        .then((vessel) => res.status(201).send(vessel))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.post('/blueprintdot', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
        .create({
         vesselname: req.body.vesselname,
         description: req.body.description,
         hidden: req.body.hidden
        })
        .then((vessel) => res.status(201).send(vessel))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });

  router.post('/blueprint', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Vessel
        .create({
         vesselname: req.body.vesselname,
         description: req.body.description,
         hidden: req.body.hidden
        })
        .then((vessel) => res.status(201).send(vessel))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });





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