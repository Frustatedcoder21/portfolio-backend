const routes=require('express').Router();
const apiController=require('../controller/apiController')

routes.get('/data',apiController.read)

module.exports=routes;