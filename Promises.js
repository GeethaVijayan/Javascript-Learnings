//Promises are used to handle async operations in JS

const cart = ["pant", "shirts", "Kurta"]

//Two apis

CreateOrder(cart)  //returns orderId
proceedToPayment()

//These Two CreateOrder and proceedtopayment are async operations
//we dont know howmuch time this operations will take 
//but this both are dependent (once after completeion of createorder only we can do proceedtopayment)

/*Promise is something which returns first empty object and follows next functions
once async operation is completed promise is filled with data object */

/* In callback - we pass one function inside another function so it is dependent on other function 
  which means we are giving code control to another function */

  const promise = createOrder(cart);

/* In promises - we are attaching the function to promise function */
/* after getting the confirmation from promise we are getting data (result of promise) only we are
attaching the second function */

  promise.then(function (orderId){
    proceedToPayment(orderId)
  })


  /* promise object is not only empty object it is much more special than that */
/*fetch is an api given by browser to make api calls */
  
const GITHUB_API = "https://jsonplaceholder.typicode.com/todos"

//this fetch function returns us a promise

const user = fetch(GITHUB_API)





