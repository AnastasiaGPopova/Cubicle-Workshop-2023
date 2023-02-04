const Cube = require('../models/Cube')

exports.getOneCube = (cubId) => Cube.findById(cubId)