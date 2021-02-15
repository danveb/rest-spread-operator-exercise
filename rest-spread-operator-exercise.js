// rest/spread Operator exercise 

// Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

// function expression; rest arguments
const filterOutOdds = (...arguments) => {
    // filter arguments; (num)
    return arguments.filter((num) => {
        return num % 2 === 0; 
    })
}

// findMin
//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

// function expression; rest arguments 
const findMin = (...arguments) => {
    // return Math.min of arguments (use spread) 
    return Math.min(...arguments); 
}

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// function expression (accept 2 objects)
const mergeObjects = (obj1, obj2) => {
    // return reduce() 
    const newObj = {...obj1, ...obj2}; 
    return newObj; 
}

// OR 
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}); 
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// function expression(arr, rest param(...argument1)) 
const doubleAndReturnArgs = (arr, ...argument1) => {
    // return map(...array, argument1.map())
    return [...arr, ...argument1.map((num) => {
        // return num * 2
        return num * 2; 
    })]
}

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    // initiailze index; look randomNum (items.length)
    let index = Math.floor(Math.random() * items.length); 
    // return with slice 
    return [...items.slice(0, index), ...items.slice(index + 1)]; 
}

const removeRandom = (items) => {
    // initiailze index; look randomNum (items.length)
    let index = Math.floor(Math.random() * items.length); 
    // return with slice 
    return [...items.slice(0, index), ...items.slice(index + 1)]; 
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    // return [...array1, ...array2]
    return [...array1, ...array2] 
}

const extend = (array1, array2) => {
    // return [...array1, ...array2] 
    return [...array1, ...array2] 
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    // initialize newObj as rest obj
    let newObj = {...obj}; 
    // newObj[key] 
    newObj[key] = val; 
    // return 
    return newObj; 
}

const addKeyVal = (obj, key, val) => {
    // initialize newObj as rest obj 
    let newObj = {...obj}; 
    // newObj[key] 
    newObj[key] = val; 
    // return newObj
    return newObj; 
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    // initialize newObj as rest obj 
    let newObj = {...obj}; 
    // delete key from obj 
    delete newObj[key]; 
    // return 
    return newObj; 
}

const removeKey = (obj, key) => {
    // initialize newObj as rest obj 
    let newObj = {...obj}; 
    // delete key from obj 
    delete newObj[key]; 
    // return obj
    return newObj; 
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    // initialize newObj with rest obj1, obj2 
    let newObj = {...obj1, ...obj2}; 
    // return newObj 
    return newObj; 
}

const combine = (obj1, obj2) => {
    // initialize newObj with rest...obj1, obj2
    let newObj = {...obj1, ...obj2}; 
    // return obj 
    return newObj; 
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    // initialize newObj with rest {...obj} 
    let newObj = {...obj}; 
    // key of newObj 
    newObj[key] = val; 
    // return obj
    return newObj; 
}

const update = (obj, key, val) => {
    // initialize newObj with rest {...obj} 
    let newObj = {...obj}; 
    // key of newObj 
    newObj[key] = val; 
    // return obj
    return newObj; 
}