require('dotenv').config();
const express = require("express");
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); //format for importing node-fetch in common JavaScript


router.get('/',(req,res)=>{
    res.redirect('/get')
})

router.get('/get',(req,res)=>{
    res.render('home.ejs',{'data':'get'});
})
router.get('/post',(req,res)=>{
    res.render('home.ejs',{'data':'post'});
})

module.exports = router;