var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "232kak",
        "text":"Eggs"
    },
    
    {
         "id": "d3p345",
        "text":"Milk"
    },
    
    {
     "id": "dkcuu7",
        "text":"Chicken"
    },
    
    {
         "id": "2424k3",
        "text":"Chocolate"
    }
];


//app.get('/', function(request , response){
//        response.send('My First API!');
//        });

//app.get('/funions', function(req, res) {
//    res.send('Yo give me some funions fool!')
//});



app.get('/ingredients', function(request , response){
        response.send(ingredients);
        });

app.post('/ingredients', function(req, res){
    var newingredient = req.body;
    if (!newingredient || newingredient.text === ""){
        res.status(500).send({error: "Your ingredient must have text"});
    }
    
    else{
        ingredients.push(newingredient);
        
        res.status(200).send(ingredients);
        
        
    }
})



app.put('/ingredients/:ingredientId', function(req, res){
   
    var ingredientId = req.params.ingredientId;
    
    var newtext = req.body.text;
    
    if(!newtext || newtext === ""){
       
       res.status(500).send({error: "You must provide ingredient text"})
        
    } else {
        var objectFound = false;
        
        for (var x=0; x<ingredients.length; x++){
            var ing = ingredients[x];
            
        if (ing.id === req.params.ingredientId){
            
            ingredients[x].text = newtext;
            objectFound = true;
            break;
        }
        }
        
        if (!objectFound){
            
            res.status(500).send({error: "Ingredient id not found"})
        }
        
        res.send(ingredients);
    }
    
    
});


app.listen(3000, function() {
    console.log("First API running on port 3000!");
});