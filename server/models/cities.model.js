const mongoose = require('mongoose');

module.exports = mongoose.model('City' , new mongoose.Schema({
                                    city : {
                                        type : String
                                    },
                                    county : {
                                        type : String
                                    },
                                    county_slug : {
                                        type : String
                                    },
                                    slug : {
                                        type : String
                                    },
                                    state : {
                                        type : String
                                    },
                                    state_full : {
                                        type : String
                                    },
                                    state_slug : {
                                        type : String
                                    }
                                }),
                                'cities'
                                )
