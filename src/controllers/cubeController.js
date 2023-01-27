const Cube = require('../models/Cube.js')
const Accessory = require('../models/Accessory.js')

exports.getCubCreation = (req,res) => {
    res.render('create')
}

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl , difficultyLevel } = req.body
    let cube = new Cube({name, description, imageUrl , difficultyLevel} )//encoded body-to, which we receive, will create a new cube
    //save cube

    await cube.save()
    //redirect
    res.redirect('/')
}

exports.getDetails = async (req, res) => {

    let currentCube = await Cube.findById(req.params.cubeId).populate('accessories').lean() //it makes a request to the DB and gives us back all accessories with all details and infos/not only the ID/


    if(!currentCube){
        return res.redirect('/404')
    }
    res.render('cube/details', {currentCube})

}

exports.getAttachAccessory = async (req,res) => {
    const cube = await Cube.findById(req.params.cubeId).lean()
    const accessories = await Accessory.find().lean()
    res.render('cube/attach', {cube, accessories})
}

exports.postAttachedAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId) //its NOT lean, its a document
    const accessoryId = req.body.accessory //accessory ID

    cube.accessories.push(accessoryId)


    cube.save()
    res.redirect(`/cubes/${cube._id}/details`)

}