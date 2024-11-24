
const projectmodel = require("../models/projectmodel")

const create=async(req,res)=>{
   let {name,description,technologies,link}=req.body;
   const technologie_arr=technologies.split(',');
    try{
        const project= await projectmodel.create({
            name,
            description,
            technologies:technologie_arr,
            link
     })
     res.redirect('/user')
     
    }catch(error){
      console.error(error);
      
    }
}
// const read=async(req,res)=>{

//     try{
//         const project= await projectmodel.find()
//      res.render('read',{project})
     
//     }catch(error){
//       console.error(error);
      
//     }
// }

module.exports={create};