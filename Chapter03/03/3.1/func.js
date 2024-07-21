const {odd, even} = require('./var.js');

exports.checkNumber = function checkOddOrEven(num){
    if(num % 2) return odd;
    return even;
}