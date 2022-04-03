var mongoose=require('mongoose');

const articleSchema=new Schema({
    title:String,
    description:String,
    tags:[String]
  
})


articleSchema.index({tags:1})

articleSchema.index({title:'text',description:'text'})



module.exports=mongoose.model('article',articleSchema);