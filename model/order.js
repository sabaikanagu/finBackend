const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'orderitem',
        required : true
    }],
    shippingAddress1:{
        type:String,
        required:true,
    },
    shippingAddress2:{
        type:String,
    },
    city:{
        type:String,
        required:true,
    },
    zip:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'Pending'
    },
    totalPrice:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    dateOrdered:{
        type:Date,
        default:Date.now,
    }

 })
 orderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
orderSchema.set('toJSON',{
    virtuals:true,
});
const Order= mongoose.model('orders',orderSchema );
 module.exports = Order;