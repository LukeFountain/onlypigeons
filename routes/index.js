const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require("../middleware/auth")

//this is the login/landing page 
//route GET / 
router.get('/', ensureGuest, (req, res) => {
    res.render('login',{
        layout: 'login'
    })

})

//this is the Dashboard
//route GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard',{
        name: req.user.firstName,
    })
})

module.exports = router 

