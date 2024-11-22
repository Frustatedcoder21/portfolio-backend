const mongoose=require('mongoose');

const connectDB=()=>{
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('DataBase connected');
    
})
.catch((error)=>{
    console.error("error has occured",error);
    
})
}
module.exports=connectDB;