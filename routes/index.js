const express = require('express');
const router = express.Router();

const apicache  = require('apicache')
const cache     = apicache.middleware

/* GET home page. */
router.get('/', cache('1 minute'), function(req, res, next) {
	// use  " req.query.<youVarName>' " to get url params
	return res.status(200).send("api working")
});



module.exports = router;
