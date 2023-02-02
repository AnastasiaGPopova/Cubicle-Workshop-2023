
exports.loginPage = (req,res) => {
    res.render('auth/login')
}

exports.registerPage = (req,res) => {
    res.render('auth/register')
}

exports.postRegisterUser = (req, res) => {

}

exports.postLoginUser = (req, res) => {
    const {username, password, repeatPassword} = req.body

    if(password !== repeatPassword) {
        return res.redirect('/404')
    }
}