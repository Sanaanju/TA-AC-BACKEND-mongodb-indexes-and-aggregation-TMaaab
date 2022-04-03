var mongoose=require('mongoose');

const userSchema=new Schema({
    name:String,
    username:{type: String,unique:true},
    email:{type: String,unique:true},
    address:{
        city:String,
        state:String,
        country:String,
        pin:Number
    }
})

userSchema.indexes({'address.state':1,'address.country':1},{unique:true})


module.exports=mongoose.model('User',userSchema);