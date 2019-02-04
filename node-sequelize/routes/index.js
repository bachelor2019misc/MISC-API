var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const vesselController = require('../controllers').vessel;
const imagevesselController = require('../controllers').imagevessel;

// Vessel controller routes
router.get('/api/vessel', vesselController.list);
router.get('/api/vessel/:id', vesselController.getById);
router.post('/api/vessel', vesselController.add);
router.put('/api/vessel/:id', vesselController.update);

// Imagevessel controller routers
router.get('/api/imagevessel', imagevesselController.list);
router.get('/api/imagevessel/:id', imagevesselController.getById);
router.post('/api/imagevessel', imagevesselController.add);
router.put('/api/imagevessel/:id', imagevesselController.update);