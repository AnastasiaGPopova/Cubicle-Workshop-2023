//dobavqne na handlebars
const handlebars = require('express-handlebars')

function setupViewEngine(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }))
    
    app.set('view engine', 'hbs')
    app.set('views', './src/views') //kazvame kyde da tyrsi papkata views

}

module.exports = setupViewEngine

