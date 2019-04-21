var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const vesselController = require('../controllers').vessel;
const roomController = require('../controllers').room;
const roomDotController = require('../controllers').roomdot;
const blueprintdotController = require('../controllers').blueprintdot;
const blueprintController = require('../controllers').blueprint;
const productController = require('../controllers').product;
const subproductController = require('../controllers').subproduct;
const currencyController = require('../controllers').currency;


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

// Roomdot controller routes
router.get('/api/roomdot', roomDotController.list);
router.get('/api/roomdot/:id', roomDotController.getById);

// Subproduct controller routes
router.get('/api/subproduct', subproductController.list);
router.get('/api/subproduct/:id', subproductController.getById);

// Currency controller routes
router.get('/api/currency', currencyController.list);
router.get('/api/currency/:id', currencyController.getById);