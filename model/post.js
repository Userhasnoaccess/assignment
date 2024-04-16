const mongoose=require('mongoose');
const schema =mongoose.Schema({
    name:String,
    location : String,
    position :String,
    salary : Number   
})

const postmodel =mongoose.model('post',schema);
module.exports=postmodel;