//var name = "Rahil";
//var age = 23;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old !";
//
//alert(message);

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcome," + firstName + ". Happy " + age + "rd " + "birthday!";
//
//
//console.log(loginWelcomeMessage);

//var sum = 6 + 9;
//var sub= 15-10;
//var mul=5*10;
//var mod = 10 % 3;
//



// == equal to
// === equal to and variable type is also same


//var msg= "10 / 3 = 3 with a remainder of " + mod;
//console.log(msg);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 600;
//
//if (nikeSBShoes <= myAccountBalance){
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes!")
//    console.log("Account Balance: " + myAccountBalance);
//} else if (nikeSBShoes - coupon <= myAccountBalance){
//    console.log("wew just bought some dope shoes with a coupon");
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("Account balance: "+ myAccountBalance);
//    
//}
//else
//    {
//        console.log("You too broke for shoes bruh!")
//    }



//
//var students = ["Timmy", "Janessa", "Arun"];
//
//var naughtyList = [];
//naughtyList.push(students[0]);
//
//
////two ways to pop //
//// 1
//naughtyList.pop();
//
////2
////var index = naughtyList.indexOf("Timmy");
////
////if (index > -1) {
////     naughtyList.splice(index, 1);
////}
//
//
//
//
//console.log(naughtyList);
//
//





//End

// ------------------------ loops ----------------//

//var someVal = 10;
//for (var x=0; x <= someVal ; x++){
//    console.log(x);
//    
//    
//}

//
//var students = ["John", "Jacob", "Heimer", "Smith"];
//var i=0;
//for (var x=0; x < students.length; x++){
//    console.log(students[x]);
//}




// FUnctions -------------------------



//function area(length, width) {
//    return length * width;
//}
//
////var area1 = area(10,15);
////var area2 = area(12,14);
////
////console.log(area1);
////console.log(area2);
//
//var rectangleAreas = [];
//rectangleAreas.push(area(10,15));
//rectangleAreas.push(area(14,2));
//rectangleAreas.push(area(4,5));
//
//console.log(rectangleAreas);
//
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -=priceOfSale;
//        console.log("Purchage Successful");
//        
//    }
//    else {
//        console.log("Insufficient Funds");
//        
//    }
//    
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//console.log(bankBalance);
//makeTransaction(2.32);
//console.log(bankBalance);
//makeTransaction(10.45);
//console.log(bankBalance);
//
//makeTransaction(450);
//
//
//var transaction = function(priceOfSale){if (priceOfSale <= bankBalance) {
//        bankBalance -=priceOfSale;
//        console.log("Purchase Successful");
//        
//    }
//    else {
//        console.log("Insufficient Funds");
//        
//    }
//    
//}
//
//transaction(10);
//
//



//---------------------Objects-----------------------------


//var student0 = {
//    firstName: "Peter",
//    lastName: "Parker",
//    age :7
//};
//
//console.log(student0.greeting());

//console.log(student.firstname);
//console.log(student.lastName);

//Creates a new empty object or var student2 = {};
//var student1 = new Object();
//
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 ={};
//student2.firstName = "Zack";
//student2.lastName = "Dempsy";
//student2.age = 5



//
//
//var students = [];
//
//
//function student(first, last, age){
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi, i'm " + this.firstName + " and i m " + this.age + "years old.";
//        
//    }
//    
//}
//
////var s1 = new student("Jenny", "Laga",5);
////console.log(s1);
////console.log(s1.greeting());
//
//
////-----OR-----
//
//students.push(new student("Jenny","Laga",5));
//students.push(new student("Timmy","Turner",8));
//students.push(new student("Carl","Jr",4));
//
//
//var student = students[0];
//
////for in loop / debugging
//for (var key in student) {
//    console.log(student[key]);
//}

//students.push(student0);
//students.push(student1);
//students.push(student2);


//
//for (var i=0; i < students.length; i++){
//    var student = students[i];
//    console.log(student.greeting());
//}




//-------------------Bind------------------

//this.car = "Honda Civic w/ Ugly Spoiler";
//
//var marksGarage = {
//    car: "Aston Martin",
//    getCar: function() {
//        return this.car;
//    
//    }
//};
//
//console.log(marksGarage.getCar());
//
//var storeGetCarForLater = marksGarage.getCar;
//
//console.log(storeGetCarForLater()); //wtf
//
//
//
//var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
//
//console.log(theRealGetCarFunction());













