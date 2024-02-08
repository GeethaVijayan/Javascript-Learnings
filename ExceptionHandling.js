/**
 * Exception Handling 
 *   Before Predicting what are all the errors will come and handled in try block
 *   Predicting the possible errrors and put it in throw once it is throw we need to put it in catch block
 */


try{
    num = prompt("Enter Valid Number");
    if(num = "")
       throw("Number cannot be empty")
    if(isNaN(num))
         throw("Enter Valid Num");
         console.log(num **2)
}

catch(error){
    console.log(error)
}
finally{
    console.log("Finally will run anyways")
}