//--------Configuring the router /which gets exported at the end----------
const express = require('express')
const Router = express.Router
const router = Router()
// ----------------------------------
const cubeController = require('./controllers/cubeController')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

//----------------How to access the cube create page action----------------------
// app.get('/create', (req, res) => {
//     res.render('create')
// })

// app.get('/create', cubeController.getCubCreation)
//---------------------------------------

router.get('/create', cubeController.getCubCreation)

module.exports = router