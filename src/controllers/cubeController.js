const Cube = require('../models/Cube.js')
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

    let currentCube = await Cube.findById(req.params.cubeId).lean()

    if(!currentCube){
        return res.redirect('/404')
    }
    res.render('details', {currentCube})

}
