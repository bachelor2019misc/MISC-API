var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const vesselController = require('../controllers').vessel;
const imagevesselController = require('../controllers').imagevessel;
const roomController = require('../controllers').room;
const blueprintdotController = require('../controllers').blueprintdot;


// Vessel controller routes
router.get('/api/vessel', vesselController.list);
router.get('/api/vessel/:id', vesselController.getById);
router.post('/api/vessel', vesselController.add);
router.put('/api/vessel/:id', vesselController.update);

// Imagevessel controller routes
router.get('/api/imagevessel', imagevesselController.list);
router.get('/api/imagevessel/:id', imagevesselController.getById);
router.post('/api/imagevessel', imagevesselController.add);
router.put('/api/imagevessel/:id', imagevesselController.update);

// Room controller routes
router.get('/api/room', roomController.list);
router.get('/api/room/:id', roomController.getById);
router.post('/api/room', roomController.add);
router.put('/api/room/:id', roomController.update);

// Blueprintdot controller routes
router.get('/api/blueprintdot', blueprintdotController.list);
router.get('/api/blueprintdot/:id', blueprintdotController.getById);
router.post('/api/blueprintdot', blueprintdotController.add);
router.put('/api/blueprintdot/:id', blueprintdotController.update);