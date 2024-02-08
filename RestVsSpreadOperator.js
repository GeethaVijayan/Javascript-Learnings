/**
 * Spread means to open something that has been folded and rest stand with remaining simple 
 * 
 * Rest operator:
 *    The rest operator is used for gathering multiple elements into an array. 
It allows you to collect all the remaining elements of an iterable 
into a single variable.

function sum(a,b,...others){
  console.log(others);
  return a+b;
}
o/p:
console.log(sum(4,5,4,3,4,5));


spread
The spread operator is used to expand an iterable into single
elements. 
It allows you to easily copy elements from one array/object into another array/object.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

 */




//-----------------------------------------

const a = [1,2,3];
const b = [4,5,6];
const c = a.concat(b);
console.log(c); // [1,2,3,4,5,6]

o/p: [1,2,3,4,5,6]

//but difficult part is we need to remember keyword concat 

const a = [1,2,3];
const b = [4,5,6];
const c = a.concat(b);
console.log(c); // [1,2,3,4,5,6]

o/p: [1,2,3,4,5,6]