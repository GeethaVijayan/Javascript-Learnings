const cart = ["top","bottom","formal"];

// createOrderApi
//makepayment
//OrderSummary
//updateWallet

const promise =  createOrder(cart);

/* Attcahing callback function */
        createOrder(cart)
        .then(function(orderId){
            console.log(orderId);
            return orderId;
        })
        .catch(function (err){   //catch is for handling errors
            console.log(err)
        })
        .then(function(orderId){
            return proceedToPayment(orderId)
        })
        .then(function(paymentInfo){
            console.log(paymentInfo)
        })
        .catch(function(err){
            console.log(err.message)
        })
        .then(function(){
            console.log("since i'm after catch nomatter still i will execute ")
        })


        function createOrder(cart){
             const pr = new Promise(function(resolve,reject){
                //createorder
                //validateCart
                //orderId

                if(!Validatecart(cart)){
                    const err = new Error("Cart is not valid")
                    reject(err)
                }
                  const orderId = 12345
                setTimeout(function(){
                    resolve(orderId);
                },5000)
             })
        }

          function proceedToPayment(orderId){
              return promise(function (resolve,reject){
                resolve ("payment Successful")
              })
                     
              
          }

        function validateCart(){
            return true;
        }
        //promise chain

