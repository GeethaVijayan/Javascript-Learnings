
 //Promise 

    /**
     * CreateOrder
     * makePayment
     * orderSummary
     */

    function createorder(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  const selectedItems = true;

                  if(selectedItems){
                    resolve("selected items for order")
                  }else{
                    reject("items are rejected")
                  }

            },5000)
        })
    }

    function makePayment(selectedOrders){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  const selectedItems = true;

                  if(selectedOrders){
                    resolve("Payment done")
                  }else{
                    reject("Payment declined")
                  }

            },5000)
        })
    }

    function orderSummary(PaidOrders){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{

                  if(PaidOrders){
                    resolve("orders Invoice generated")
                  }else{
                    reject("orders  declined")
                  }

            },5000)
        })
    }

    createorder().then((items)=> {return makePayment(items)})
                 .catch((error)=>{console.log("error occured")})
                 .then((PaymentDetails)=> {return orderSummary(PaymentDetails)})
                 .catch((error)=>{console.log("error occured")})
                 
                 /**------------------------------------------------------ */

                 //Same Execution using Async Await 

                Async function consolidatedFunction(){
                    try{
                        const data = await createorder();
                    const Gig = await makePayment();
                    const wt = await orderSummary();
                    }
                    catch(error){
                        console.log(error)
                    }
                    
                 }