var mongoose=require('mongoose');


var stackOverflowSchema=new Schema({
    users:Number,
    questions:[String],
    answers:[String],
    reply:[String],
    vote:Number,
    tags:[String],
    views:Number,
    reputation:String
})

db.STACK_OVERFLOW.aggregate([{$unwind:"$tags"}

db.STACK_OVERFLOW.aggregate([{$match:{questions}},{$group:{count:{$sum:1}}}])

module.exports=mongoose.model('STACK_OVERFLOW',stackOverflowSchema);