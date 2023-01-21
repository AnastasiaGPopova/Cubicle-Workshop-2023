const Cube = require('../models/Cube')

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
