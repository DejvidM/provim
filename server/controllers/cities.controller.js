const City = require('../models/cities.model')

module.exports.GetAllCities = (req , res) => {

    City.find()
        .then( cities => {res.json(cities)})
        .catch(err => res.json(err))

}

