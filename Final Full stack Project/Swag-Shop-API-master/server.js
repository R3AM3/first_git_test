var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop', { useNewUrlParser: true }); 

var Product = require('./models/product');
var WishList = require('./models/wishList');

//Allow all requests from all domains & localhost
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });

//Middleware
app.use(bodyParser.json());
//this line of code mean refuse any thing that is not formatted
app.use(bodyParser.urlencoded({extended: false}));



//////// Products
app.post('/product', function(request, response){
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.save(function (err, savedProduct){
        if(err)
        {
            response.status(500).send({error: "Could not save product"});
        }
        else{
            response.status(200).send(savedProduct);
            // response.send(savedProduct); ok also
            // response.json(savedProduct); ok also
        }
    })
});

app.get('/product', function(request, response){
    Product.find({}, function(err, products){
        if(err)
            response.status(500).send({error: "Could not get Products"});
        else{
            response.status(200).send(products);
        }
    })
});

//remove product with specific Id
app.get('/remove/product',function(request,response){
    Product.findOne({_id: request.body.productId}).remove().exec(function(err, newproducts){
        if(err)
             response.status(500).send({error: "Could not delete the product"});
        else
            response.send(newproducts);   
    })
}); 

///////WishList
app.post('/wishList', function(request, response){
    var wishList = new WishList();
    wishList.title = request.body.title;

    wishList.save(function(err, newWishList){
        if(err)
            response.status(500).send({error: "Could not add your wishList"});
         else
            response.send(newWishList);   
    })
})

app.get('/wishList', function(request, response){
    // WishList.find({}, function(err, savedWishList){
    //     if(err)
    //         response.status(500).send({error: "Can not fetch your wishList"});
    //      else
    //         response.status(200).send(savedWishList);   
    // })
    WishList.find({}).populate({path: 'products', model: 'Product'}).exec(function(err, wishLists){
        if(err)
            response.status(500).send({error: "Could not fetch your wishList"});
        else
           response.status(200).send(wishLists);   

    })
})


app.put('/wishList/product/add', function(request, response){
    Product.findOne({_id: request.body.productId}, function(err, product){
        if(err)
            response.status(500).send({error: "Could not add item to wishList"})
        else{
           WishList.update({_id: request.body.wishListId}, {$addToSet: {products: product._id}}, function(err, wishList){
            if(err)
                response.status(500).send({error: "Could not add item to wishList"});
            else{
                response.status(200).send(wishList); 
            }

           }) 
        }

    })
})



app.listen(3004, function(){
    console.log("Swag shop API running on port 3004!");
});    


 