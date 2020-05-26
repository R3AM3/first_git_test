var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new mongoose.Schema({
    title: {type: String, default: "Cool Wish List", require: true},
    products: [{type: ObjectId, ref:'product'}] //this is the relationships 
});

//product is what will stored in JS
module.exports = mongoose.model('WishList', wishList);