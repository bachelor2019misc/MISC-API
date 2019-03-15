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
const blueprintController = require('../controllers').blueprint;
const productController = require('../controllers').product;


// Vessel controller routes
router.get('/api/vessel', vesselController.list);
router.get('/api/vessel/:id', vesselController.getById);

// Room controller routes
router.get('/api/room', roomController.list);
router.get('/api/room/:id', roomController.getById);

// Blueprintdot controller routes
router.get('/api/blueprintdot', blueprintdotController.list);
router.get('/api/blueprintdot/:id', blueprintdotController.getById);

// Blueprint controller routes
router.get('/api/blueprint', blueprintController.list);
router.get('/api/blueprint/:id', blueprintController.getById);

// Product controller routes
router.get('/api/product', productController.list);
router.get('/api/product/:id', productController.getById);