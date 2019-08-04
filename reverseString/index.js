//Write a function that takes in a string and return it reversed. 

const reverser = (str) => {
    var splitter = str.split('');
    var reverser = splitter.reverse();
    var joiner = reverser.join('');
    return joiner;
}

console.log(reverser('this is a test'))
console.log(reverser('this is also a test'))