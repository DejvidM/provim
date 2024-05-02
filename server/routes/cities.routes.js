const CityController = require('../controllers/cities.controller');

module.exports = (app) => {

    app.get('/api/cities' , CityController.GetAllCities);

} 