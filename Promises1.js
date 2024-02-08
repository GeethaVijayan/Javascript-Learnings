/* promise object is not only empty object it is much more special than that */
/*fetch is an api given by browser to make api calls */
  
const GITHUB_API = "https://jsonplaceholder.typicode.com/todos"

//this fetch function returns us a promise

const user = fetch(GITHUB_API)

console.log(user)

user.then(function(data){
    console.log(data,'data')
})
//promiseObbject has two types 

/*
1) PromsieState -
   1.1) pending - initially promise will be in pending state
   1.2) fulfilled - once promise is done (after completion of async operations) it is fulfilled state
2) promiseResult  - data which we are getting (data which fetch method will return it will get store inside promiseresult)
*/

/* A promise has only 3 states
  1)pending
  2)fulfilled
  3)rejected */

  //promise object is immutable 


  //coming to problem 
  //passing 2 apis in a time 


  /* proccess for ecommerce website
   1) createOrder
   2) pocesspayment
   3) showOrderSummary
   4) updateWallet
     // when we write more apis which are dependent to other we tend to fall into callback hell
     
     /* To handle all this we are having promise chain 
        // Promise Chaining - we are piping the data 
          /* we are returning it passing the result of one promise data to another 

      /* ----------------------------------------
         ------------------------------------------------------*/
         
         /* Creating a promise 
              Creating producer part and passing it to Consumer Part 
                                                          promise.then 

                   promise has a constructor which takes execute function which has 2 arguments 
                   resolve and reject 
                   once promise is sucess it comes with resolve 
                   viceversa
                   
                   sample creation of promise
                   1) creation part
                   promise pr = new promise(function(resolve,reject){
                    if(!true){
                        const error = "promise failed";
                        rejec(error)
                    }
                    if(true){
                        resolve(o.p)
                    }
                    return pr
                   })

                   2. consuming part -based on result of promsies created we need to attach second function

                   pr.then(function(){
                       callback fn 
                   })
                   */
                  /* once we get Error in promise we need to handle it 

                  once we reject the promise we need to resolve it 
                     by error handling 

                     promise.then(function (){}) //if promise is success we need attach callback function
                             .catch( function(err){ console.log(err.message)})
                              By using catch we dont get error in redcolor