const express = require('express');
const router = express.Router();
const {Campus} = require('../models');

router.get("/",(req, res)=>{
    res.send("All campuses")
})


module.exports = router;