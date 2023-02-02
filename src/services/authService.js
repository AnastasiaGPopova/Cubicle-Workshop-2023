const User = require('../models/User.js')

exports.getUserByUsername =  (username) => User.findOne({username})

exports.register = (username, plainPassword) => User.create({username, password: plainPassword})

exports.login = async (username, password) => {
    const existingUser = await this.getUserByUsername(username)

    const isValid = await existingUser.validatePassword(password)

    if(!existingUser || !isValid){ //we call the modell method
      throw "Invalid username or password!"
   }

   return existingUser
}
