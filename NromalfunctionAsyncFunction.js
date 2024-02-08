const P2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved")
    },10000)
})

function getData(){
    //Js Engine will not wait for promise to resolve.
  P2.then((result)=>console.log(result))
  console.log("Normal Function sample")
}

getData();
//This is how nrmal js handle promises
/* o/p : 
    Normal Function sample 
     after 10 seconds
    promise resolved"
    */

    

            //Example await function
    /*---------------------------------------------------- */
    Async handleData(){
        const v1 = await P2;
        console.log("Async Await sample")
    }

    // o.p: after 10 seconds
     //This is how nrmal js handle promises
/* o/p : 
     After 10secinds
       Async Await sample

   
    */

       //Await basically waits for the particular call to finish 
       //once it is done only it will proceed to nextline until then it will simply waits


       /* what if we get await two times in a function 
        1) will it run parallely 
        2)Both call will run paralleyl*/


        promise P = new promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("promise 2 resolved Successfully")
            },5000)
        })

       
        Async handleData(){
             
            const val1 = await p1
            const val2 = await P2
        }
    
        //though val2 is timelimit of 5s we need to wait for all promises to be completed 
        // Val 1 is 10s After 10S everything will get printed
  //FirstCase:
        //once we reverse the order we will get it 
        //p1 will take timelimit of 10s
        //P2 will take timelimit of 5s
        //now we will get o/p
        //Whole program wait for 10S(P1) and prints result
//SecondCase:
        
        //p1 will take timelimit of 5s
        //P2 will take timelimit of 10s
        //now we will get o/p
        //P1 will print frst after5s
        //P2 will print second after 10S
        //Prints Result


        /*
           Callstack
             -Mainthread
                 - little little functions 
                 when function ends
                 when handleData function executes 
                 ---- if it sees await it will suspend the whole handleData function from callstack 
                 once after its completion it will execute
        */
        
                 //Using realtime Api with AsyncAwait
                const API_URL= "https://api.github.com/user"
                   async function getData(){
                    const data =  await fetch(API_URL)

                    const jsonValue = await data.json()
                  
                     //In promisevalue 
                       fetch('').then((res)=>res.json())
                                .then((result)=>console.log(result))


                    //fetch returns response obj which is readable format. 
                    //suppose you want to convert we will do in json format

                    /*fetch() => Response.json()(promise) =>JsonValue(Result)
         */
                   }

                   //Error handling
                   //In AsyncAwait we will use trycatch method

                   async function getData(){
                    
                    try{
                        const data =  await fetch(API_URL)
                    const jsonValue = await data.json()
                    }
                    catch(err){
                        console.log(err)
                    }

                    //Another way of handling error 
                    getData().catch((err)=>console.log(error))

                   }
