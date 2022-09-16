// const url = require("url");

const Weather = require('../models/weather')


const weatherFunction = async (req, res) => {
    res.send("hi iam weather ")
}


const weatherPost = async (req, res) => {
    
    try{
        const weather = await Weather.create(req.body);
        console.log(weather)
    }catch(err){
        console.log(err);
    }
    // let obj = url.parse(newUrl);
    // console.log(obj);
    // console.log(obj.query.split("=")[1].slice(0,-2));
    // res.send("hi iam weather post ")
}
module.exports = { weatherFunction, weatherPost }