function missingWord(nums, str) {
    let result = [];
    let splitStr = str.replace(/\s/g, '').toLowerCase().split('');
    let sortNums = nums.sort((a,b) => a - b);
    
    for(let x of sortNums){
      if(splitStr[x]){
        result.push(splitStr[x]);
      }else{
        return 'No mission today'
      }
    }
    return result.join('')
  }