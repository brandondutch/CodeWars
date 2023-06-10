//we will be given a str and an arr of strs. 
//we will return true if all rotations of str are in arr, else false

function containAllRots(strng, arr) {
    //using a for loop, loop through the arr
  for( let i = 0; i < strng.length; i++){
    //using includes method check if str rotation is in arr
    if(!arr.includes(strng.slice(i) + strng.slice(0,i))){
      //return false if it is not
       return false;
       }
  }
  //otherwise return true
  return true;
}

console.log(containAllRots("", []), true)
console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)