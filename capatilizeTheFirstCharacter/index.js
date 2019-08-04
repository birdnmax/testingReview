//Write a function that take in a string(should be a sentence) and capatilizes the first character of each word.  

const capper = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
console.log(capper('i like pizza'))
console.log(capper('i LikE pIzza'))