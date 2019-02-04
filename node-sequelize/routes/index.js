var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const vesselController = require('../controllers').vessel;
router.get('/api/vessel', vesselController.list);
router.get('/api/vessel/:id', vesselController.getById);
router.post('/api/vessel', vesselController.add);
router.put('/api/vessel/:id', vesselController.update);
