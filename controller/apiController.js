const projectmodel=require('../models/projectmodel')
const read=async(req,res)=>{

    try{
        const project= await projectmodel.find()
     res.json(project)
     
    }catch(error){
      console.error(error);
      
    }
}
module.exports={read}