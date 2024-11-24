const mongoose=require('mongoose');

const projectSchema=mongoose.Schema({
    name:String,
    description:String,
    technologies:{
        type:Array,
        default:[],

    },
    link:String
})

module.exports=mongoose.model('project',projectSchema);