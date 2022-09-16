const express=require("express")

let router = express.Router();
const { weatherFunction, weatherPost }=require('../ctrl/weatherCtrl')

router.get('/', weatherFunction)
router.post('/', weatherPost)

module.exports = router;