/* 
  1) what is aync
  2) what is await
  3)How async await work behind the scenes
  4)Examples of using async/await
  5)Error handling
  6)interviews
  7)Async/Await Vs promises .then/catch
   */

  /**
   * Async - makes function return Promise
   * Await - makes Async function return for promise
   * 
   * Allows you to run asynchronous code in synchronous manner
   * Async doesn't have resolve or reject parameter
   * Everything after await is placed in event Queue
   * 
   */

//Async function always return a promise

  //eg for returning non-promise (value)
           async function getData(){
            return "Namastae"
           }
           
           getData().then((res)=>console.log(res))

           // either it will return a promise or non-promise value
           /* once it will return a non-promise value it will get wrapped it inisde a promise and return a promise
           /so ultimately it will return a promise
  /*1) async
           - async is a keyword used before a function to create async function.

          // async always return a promise
             
          //eg for returning promise

          */

          Promise P1 = new Promise((resolve,reject)=>{
              resolve("promise resolved")
          })

          async function getData(){
            return P1
           }

           getData().then((res)=>console.log(res)).catch((err)=>console.log(err))

           
           //using await along with async 

           

