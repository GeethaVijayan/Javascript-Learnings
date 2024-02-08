const cart = ['Jeans','Shirts','kurta'];

//hOW WE will work on this 
//1) once after selecting items in order
// 2) we need to create Order
// 3) we need to make payment

api.createOrder();

api.proceedToPayment();

api.showorderSummary();

//for this operation first we need to create an order then only we can make payment 
//it is  sybnchrounous operation 
//after ordering only we can make payment
//There is a dependency between them (synchronous)
//here comes callback in picture once we create order we call payment as callback function


api.createOrder(cart,function (){
    api.proceedToPayment(function (){
        api.showorderSummary( function (){
            api.updateWallet();

        })
    })
});






//Here problem is large codebase

//Api is depending on others we end up calling callbackhell

//Callbackhell - one callback inside another api inside another api inisde another if /
//This structure is Pyramid of doom
//---------------------------------------------
//-------------------------------------------------------------------------------

//Inversion of control 
// you lose the control of code when using callback

//when we are passing callback function inside another function we are giving control of our piece of wriiten
//code (callback fn) to main function (another function) and this is risky we need to take care