var a = 3;
var b = 5;
var c = a + b;
/*c = b / a;
c = b % a;*/
c += b;
//console.log(c);

var bananasWeight = 1.2;
var weightInGrams = bananasWeight * 1000;
//console.log(weightInGrams);

var lateInMinutes = 5;
var tomInMinutes = 30;
var lateInSeconds = tomInMinutes * 60;
//console.log(lateInSeconds);

var memoryInGB = 4;
var memoryInMB = memoryInGB * 1024;
var memoryInKB = memoryInMB * 1024;
var sizeOfArticles = 98;
var numberOfFiles = memoryInKB / sizeOfArticles;
//console.log(memoryInMB + ' MB');
//console.log(Math.floor(numberOfFiles));

var a = 6;
a *= 2;
var b = 6;
b += 3;
var c = 15;
c /= 5;
var d = 14;
d -= 7;
//console.log(d);

var name = 'bozo';
var $age = 39;
var _haveCat = true;
/*console.log(name, typeof(name) + '\n', 
$age, typeof($age) + '\n', 
_haveCat, typeof(_haveCat));*/

console.log(
    typeof("number"),
    typeof(true),
    typeof(null),
    typeof("false"),
    typeof(56)
)