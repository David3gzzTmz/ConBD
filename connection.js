const express = require('express');
const categoryController = require('./dataConn');
const router express.Router();

router.get('/Cat',categoryController.getCategorybyID);

module.exports = router;


