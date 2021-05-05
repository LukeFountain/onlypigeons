const express = require('express')
const router = express.Router()

//this is the login/landing page 
//route GET / 
router.get('/', (req, res) => {
    res.render('login',{
        layout: 'login'
    })

})

//this is the Dashboard
//route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router 

