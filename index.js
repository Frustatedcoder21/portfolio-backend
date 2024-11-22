const userRoutes = require('./routes/userRoutes');
const apiRoutes=require('./routes/apiRoutes')
const express=require('express');
const app=express();
const cors=require('cors')
const dotenv=require('dotenv').config();
const connectDB=require('./config/db')
 const port=process.env.PORT||5000
 connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())
app.set('view engine','ejs')
app.use('/user',userRoutes)
app.use('/api',apiRoutes)

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})