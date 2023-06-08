//new Set([1,1,2,2,3,4]) //RETURNS {1,2,3,4}

//[...new Set("referee")].join("")// RETURNS ref

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
/* m = {
    0: {Array(3) => true}
    1: {Array(3) => false}
}
*/

function hasDuplicate(arr) {
   let check = new Set(arr)
   return check.size === arr.length ? false: true
}

function vowels(val){
    return "aeiou".includes(val);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let val of str){
      let lowerCase = val.toLowerCase()
      if(isVowel(lowerCase)){
        if(vowelMap.has(lowerCase)){
          vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
        } else {
          vowelMap.set(lowerCase, 1);
        }
      }
    }
    return vowelMap;
  }