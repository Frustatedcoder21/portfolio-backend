const routes=require('express').Router();
const userController=require('../controller/userController')
routes.get('/',(req,res)=>{
 res.render('index')
    
})
routes.post('/create',userController.create)

// routes.get('/read',userController.read)
module.exports=routes