const Cube = require('../models/Cube')

exports.getCubCreation = (req,res) => {
    res.render('create')
}

exports.postCreateCube = (req, res) => {
    let cube = new Cube(req.body)//encoded body-to, which we receive, will create a new cube
    //save cube
    Cube.save(cube)
    //redirect
    res.redirect('/')
}
