/*
function print(callback) {  
    callback();
}
*/


//setTimeout is example of callback function
setTimeout(executeCallback,4000)
setInterval(executeCallback,5000)

var DidPayment = true;

var isMessage = true;

if( isMessage ){
    function userMessage(){
        console.log("Payment Successful");
    }
    
}

function executeCallback(DidPayment, callback){
        if(DidPayment){
            callback()
        }else{
            executeCallback();

            if(DidPayment){
                callback()
            }else{
                executeCallback();
    
                if(DidPayment){
                    callback()
                }else{
                    executeCallback();
        
                    if(DidPayment){
                        callback()
                    }else{
                        executeCallback();
        
                }
    
            }

        }
}
}

function executePromises(){
    var DidPayment = false ;

    var promise = new Promise((resolve,reject) => {
         if(DidPayment){
            resolve();
         }else{
            reject();
         }
    });

    promise.then ( () => {
        console.log("payment Successful");
    }).catch ( () => {
        console.log("payment cancelled");
    })
}

function executeAsyncAwait(){
    var DidPayment = true;
    try{
        if(DidPayment){
            console.log("payment success")
        }

    }catch(err){
        console.log("payment cancelled")
    }


}


