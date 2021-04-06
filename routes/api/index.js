const route = require('express').Router()

route.use('/donors' , require('./donors'))

exports = module.exports = {
    route
}