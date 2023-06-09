//we will be given a str. no case sens. 
// we will return a str with the first and last names swapped

function nameShuffler(str){
  //declare a variable called strArr and use split method on the variable
  let strArr = str.split(' ');
  //declare two variables called first and last. Assign them the value of strArr[0] and strArr[strArr.length -1]
  let first = strArr[0];
  let last = strArr[strArr.length -1];
  //assign strArr[0] and strArr[strArr.length -1] to the values of last and first respectivly.
  strArr[0] = last;
  strArr[strArr.length - 1] = first;
  //return strArr using join method. Joined with a space.
  return strArr.join(' ');
}

console.log(nameShuffler('john McClane'), 'McClane john')
console.log(nameShuffler('bill Nye'), 'Nye bill')
console.log(nameShuffler('ash Kechum'), 'Kechum ash')