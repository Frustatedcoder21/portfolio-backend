const mongoose=require('mongoose');

const projectSchema=mongoose.Schema({
    name:String,
    technologies:{
        type:Array,
        default:[],

    },
    link:String
})

module.exports=mongoose.model('project',projectSchema);