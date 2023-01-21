//--------Configuring the router /which gets exported at the end----------
const express = require('express')
const Router = express.Router
const router = Router()
// ----------------------------------


//----- importing the controllers----------
const cubeController = require('./controllers/cubeController')
const homeController = require('./controllers/homeController')
//-------------------------------------------

router.get('/', homeController.getHomePage)
router.get('/about', homeController.getAboutPage)


//----------------How to access the cube create page action----------------------
// app.get('/create', (req, res) => {
//     res.render('create')
// })

// app.get('/create', cubeController.getCubCreation)
//---------------------------------------

router.get('/404', homeController.getErrorPage404)
router.get('/create', cubeController.getCubCreation)
router.post('/create', cubeController.postCreateCube)
router.get('/details/:cubeId', cubeController.getDetails)


module.exports = router