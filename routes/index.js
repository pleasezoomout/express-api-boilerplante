var express = require('express');
var router = express.Router();

var apicache  = require('apicache')
var cache     = apicache.middleware

/* GET home page. */
router.get('/', cache('1 minute'), function(req, res, next) {
	// use  " req.query.<youVarName>' " to get url params
	return res.status(200).send("api working")
});



module.exports = router;
