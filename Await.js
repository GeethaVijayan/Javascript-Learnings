//Using Await along with Async

   //Async and Await are use to handle promises

   //Normal function without async and await to check for handling Promises
         promise P1 = new promise((resolve,reject)=> 
           {
             setTimeout( ()=>{ resolve("Resolved")},5000)
           }
         )
        /* 
           function getData(){
               P1.then((res)=>console.log(res))
           }
        */ 

           //Using Async await for handling it 

              Async handlePromise (){
              const D1   =   await P1;
              }
     
        //Await is a keyword only used inside a Async Function
        //using await infront of promise it has to be resolved