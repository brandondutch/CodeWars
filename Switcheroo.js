//we will be given a str of letters a,b,c. we need to switch the positions of a and b. leave c untouched
//return str with the positions of a and b switched

function switcheroo(x){
//using replace method we will switch the positions of a and b, leaving c untouched.
  return x.replace(/[ab]/g, function(letter){
    return letter === 'a' ? 'b' : 'a';
  })
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');