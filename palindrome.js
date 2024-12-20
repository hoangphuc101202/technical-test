function palindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(palindrome('hello'));



