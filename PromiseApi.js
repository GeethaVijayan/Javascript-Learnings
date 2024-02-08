/*
   Promise.all(),
   Promise.allSettled(),
   Promise.race(),
   Promise.any()
   */

   Promise.all()
    //make Parallel Api call and gets the result 
     //-It takes array of promises(api calls) is i/p
     //It will pass 3 api calls

     //It will make 3 api calls parallely and gets all result
     //all 3 apis take different time to finish  it will give  all api's result in array like mp fn
     //It will make all api's call parallel and 
     //for result it will wait for all of them to finish it will collect and give you the result
     //promises.all([p1,p2,p3])
       // o/p : [val1,val2,val3]

     /*failure case:
         what if one of the call fails 
            promise.all([p1,p2,p3])
              //p2 will get fail
                as soon as any of promise will fail it will throw an error
                whatever proimse result it get as an error it will throw that as an result
                it will not wait for all of them to execute it will throw error 
            
                */
               //-----------------------------------------------------------
               //-------------------------------------------------------------------
               Promise.allSettled()
            /* what if we need to get all other api result 
               eg: we are passing 10 api's only one api fails 
                          in promise.all() we will get error (all apis need to be success)
                           it won't print the result of rest 9 api's 
                           in that case we need promise.allsettled()
                           In promise.allsettled() we will get other api results

                           promise.allsettled([p1,p2,p3])
                            o/p: [val1,err,val3];
*/

Promise.race()

   /* the api which finishes the race is the winner
    //differnet api takes different time to finish
       eg: promise.race([p1,p2,p3])
         p1 executes in 5s result = va1l
         p2 executes in 3s result = val2
         p3 executes in 7s result = val3
         o/p:  val 2 will print first

         what if promise fails if first promise fails error will be thrown:
          it wil
          */
  
          Promise.any()

          /* wait for 1st success of promise ignore failures

              eg: promise.any([p1,p2,p3])
         p1 executes in 5s result = va1l
         p2 executes in 3s result = val2
         p3 executes in 7s result = val3
         o/p:  val 2 will print first
          what if p2 will error it will ignore and check next promise is settled or not
            if val2 fails it will ignore and checks val1 is success 
              if it is success it will print p1

              //what if all promises fails it prints aggregated error 
                [err1,err2,err3];

                d/w promise.race and promise.any is 
                 race will give frst result irrespective of success/failure
                 any will give result of 1st success */


                 Promise P1 = new promise((resolve,reject)=>{
                         setTimeout( ()=> {
                          resolve("p3 success")
                         },3000)
       
                 })
                 Promise P2 = new promise((resolve,reject)=>{
                  setTimeout( ()=> {
                   reject("p3 success")
                  },1000)

          })
          Promise P3 = new promise((resolve,reject)=>{
            setTimeout( ()=> {
             resolve("p3 success")
            },5000)

    })

    Promise.all([P1,P2,P3])
           .then((res)=>{
              console.log(res)
           })
           .catch((err)=>{
            console.log(err)
           })
//Promise.any will give all sort of agrretagated errors
    //([p1,p2,p3])
       //-catch((err)){ console.log(err.errors)} 

      

