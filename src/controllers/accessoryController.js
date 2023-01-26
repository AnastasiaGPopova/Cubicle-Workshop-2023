const router = require('express').Router()
const Accessory = require('../models/Accessory.js')

router.get('/create', (req,res) => {
    res.render('accessory/create') //when the view is in a sub-folder
})

router.post('/create', async (req,res) => {
    const {name, description, imageUrl} = req.body

   const savedAccessory = await Accessory.create({name, description, imageUrl} )

   res.redirect('/')
traalalal
})
module.exports = router