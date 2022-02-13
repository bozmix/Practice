var p = true;
var q = true;

var result = p && q;
var result1 = p || q;
//console.log(result, result1);

var age = 111;
var isValidAge;
isValidAge = age > 120 || age < 0;
//console.log(!isValidAge);

var speed = 125;
var isInLimits = speed >= 60 && speed <= 120;
console.log(isInLimits);