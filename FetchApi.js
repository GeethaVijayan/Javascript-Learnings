/*
   Fetch returns promise

   Fetch - Function used for making http request to fetch resurces
           {Json style data,images,files}
           -simplifies asynchronous data fetching in Javascript and 
           used for interacting with apis to retrieve and send 
           data asynchronously iover the web
           fetch(url, {optiond})
*/
        
//Fetch Api built into browser in order to make async request to different network resources
  //by using get ,post methods


  //Fetch get Request
  const data = fetch("https://www.careerjet.com/partners/api/")
               .then((res)=> (res.json()))
               .then((msg)=>msg[0].setup)
               .catch((err)=>console.log(err))

       //fetch Post
       const data2 = fetch("https://www.careerjet.com/partners/api/",{
        method :'POST',
        headers:{'content-type':'application/json',
      body:JSON.stringify({
        userId:22,
        id:456,
        title:'test',
        completed:false
      })}
       })
               .then((res)=> (res.json()))
               .then((msg)=>msg[0].setup)
               .catch((err)=>console.log(err))   
               
     
   //JSON
     //Javascript Object Notation            

    /*
       {"employess": [
      {"firstName":"John", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]}
    */

    //In Normal Object - key is not within doublequotes
    //JSON - key is with doublequotes

    /**
     * {"stock":"TCS"} -JSON
     * {stock: "TCS"} -Js Object
     */