var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const vesselController = require('../controllers').vessel;
const roomController = require('../controllers').room;
const blueprintdotController = require('../controllers').blueprintdot;


// Vessel controller routes
router.get('/api/vessel', vesselController.list);
router.get('/api/vessel/:id', vesselController.getById);
router.put('/api/vessel/:id', vesselController.update);

// Room controller routes
router.get('/api/room', roomController.list);
router.get('/api/room/:id', roomController.getById);
router.put('/api/room/:id', roomController.update);

// Blueprintdot controller routes
router.get('/api/blueprintdot', blueprintdotController.list);
router.get('/api/blueprintdot/:id', blueprintdotController.getById);
router.put('/api/blueprintdot/:id', blueprintdotController.update);