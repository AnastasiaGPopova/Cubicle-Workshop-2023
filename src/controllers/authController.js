const authService = require('../services/authService.js')

exports.loginPage = (req,res) => {
    res.render('auth/login')
}

exports.registerPage = (req,res) => {
    res.render('auth/register')
}

exports.postRegisterUser = async (req, res) => {
    const {username, password, repeatPassword} = req.body
    console.log(username)
    console.log(password)

    if(password !== repeatPassword) {
        return res.redirect('/404')
    }
    const existingUser = await authService.getUserByUsername(username)

    if(existingUser){
        return res.redirect('/404')
    }

    const user = await authService.register(username, password)
    console.log(user)
    res.redirect('/')
}

exports.postLoginUser = async (req, res) => {
    const {username, password} = req.body

    try{
        const user = await authService.login(username, password)
    } catch(err){
        console.log(err)
        return res.redirect('/')
    }
    res.redirect('/')
}