//--------Configuring the router /which gets exported at the end----------
const express = require('express')
const Router = express.Router
const router = Router()
// ----------------------------------


//----- importing the controllers----------
const cubeController = require('./controllers/cubeController')
const homeController = require('./controllers/homeController')
const accessoryController = require('./controllers/accessoryController')
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

router.use('/accessory', accessoryController)//if it starts with accessory, use the controller



module.exports = router