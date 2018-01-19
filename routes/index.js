var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// use  " req.query.<youVarName>' " to get url params
	return res.status(200).send("api working")
});



module.exports = router;
