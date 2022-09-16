const mongoose = require('mongoose');


const weather = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },

    params: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    }


})


const Weather = new mongoose.model("Weather", weather);



module.exports = Weather;