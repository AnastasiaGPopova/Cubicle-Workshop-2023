const Cube = require('../models/Cube')
const db = require('../db.json')

exports.getCubCreation = (req,res) => {
    res.render('create')
}

exports.postCreateCube = (req, res) => {
    const { name, description, imageUrl , difficultyLevel } = req.body
    let cube = new Cube(name, description, imageUrl , difficultyLevel )//encoded body-to, which we receive, will create a new cube
    //save cube
    Cube.save(cube)
    //redirect
    res.redirect('/')
}

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId)
    if(!cubeId) {
        return res.redirect('404')
    }
    let currentCube = db.cubes.find(x => x.id == cubeId)

    if(!currentCube){
        return res.redirect('404')
    }
    res.render('details', {currentCube})

}
