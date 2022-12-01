const express = require('express');
const controller = require('../controllers/flightControllers');
const router = express.Router();

router.get('/flights', controller.GetAllflights);
router.get('/flights/:id', controller.GetflightsById);
router.get('/flights/date/:flight_date', controller.GetflightsBydate);
router.get('/flights/data/sourcedest', controller.GetflightsBysourcedest);
router.post('/flights', controller.Addflight);
router.put('/flights/:flightId', controller.Updateflight);
router.delete('/flights/:flightId', controller.DeleteflightById);
//router.get('/flights/operational/:flight_date', controller.GetflightsByoperations());//immediate effect not callback fun

module.exports = router;