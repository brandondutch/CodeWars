function mispelled(word1, word2){
    if(Math.abs(word1.length - word2.length) >= 2){
      return false;}
    if(Math.abs(word1.length - word2.length) == 1){
      return (word1.includes(word2) || word2.includes(word1))}
    let res = 0;
    for( let i = 0 ; i < word1.length; i++){
      if(word1[i] !== word2[i]){res += 1}
    }
    if(res > 1){return false}
    else{return true}
 }
 
