/*
Write a program that calculates the maximum of two given numbers. 
A = 5 b = 6 output: 6
*/

function maximum (a, b){
    var out = '';
    a > b ? out = a + ' is larger than ' + b : out = a + ' is smaller than ' + b;
    return out
}
console.log(maximum(8, 7));

/*
Write a program that checks if a given number is odd.
A = 3 output: odd
*/

function isOdd (a) {
    var out = '';
    a % 2 === 0 ? out = 'even' : out = 'odd';
    return out
}

console.log(isOdd(4));

/*
Write a program that checks if a given number is a three digit long number.
*/

function isThreeDigits (a) {
    var out = '';
    a > 99 && a < 1000 ? out = 'the number is three digits' : out = 'the number is not three digits';
    return out
}

console.log(isThreeDigits(99));

/*
Write a program that calculates an arithmetic mean of four numbers.
*/

function mean (a, b, c, d){
    var out = (a + b + c +d) / 4;
    return out
}

console.log(mean(4,5,3,2));

/*
Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*   *
*   *
*   *
*****
*/

function square (a) {
    var out = '';
    for(var i = 0; i < a; i++){
        for(var j = 0; j < a; j++){
            if(i === 0 || i === a - 1){
                if(i === 0 && j === a - 1){
                    out += '*' + '\n';
                } else {
                    out += '*'
                }
            } else {
                if(j === 0 || j === a - 1){
                    if(j === a - 1){
                        out += '*' + '\n';
                    } else {
                        out += '*';
                    }
                } else {
                    out += ' ';
                }
            }
        }
    }
    return out
}
console.log(square(3));

/*
Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

function chart (a, b, c){
    var out = '';
    for(var i = 0; i < a; i++){
        if(i < a - 1){
            out += '* ';
        } else {
            out += '*' + '\n';
        }
    }
    for(var i = 0; i < b; i++){
        if(i < b - 1){
            out += '* ';
        } else {
            out += '*' + '\n';
        }
    }
    for(var i = 0; i < c; i++){
        if(i < c - 1){
            out += '* ';
        } else {
            out += '*' + '\n';
        }
    }
    return out
}

console.log(chart(5,3,7));

/*
Write a program that calculates a number of digits of a given number. 
*/

function numOfDigits (a){
    out = 0;
    for(var i = 1; a >= 1; i++){
        out += 1;
        a /= 10;
    }
    return out
}
console.log(numOfDigits(10000000));
/*
Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/

function repeat (a, e) {
    var out = 0;
    for(var i = 0; i < a.length; i++){
        a[i] === e ? out++ : out;
    }
    return out
}
console.log(repeat([2, 4, 7, 8, 7, 7, 1], 7));

/*
Write a program that calculates the sum of odd elements of a given array. 
*/
var s = [2, 4, 7, 8, 7, 7, 1];

function sumOfOdds (a){
    var sum = 0;
    for(var i = 0; i < a.length; i++){
        a[i] % 2 !== 0 ? sum += a[i] : sum;
    }
    return sum
}
console.log(sumOfOdds(s));

/*
Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
*/

function numberOfAs (s) {
    var num = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] === 'a' || s[i] === 'A'){
            num++;
        }
    }
    return num
}

console.log(numberOfAs('Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A'));

/*
Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
*/

function repeat (s, n){
    var out = '';
    for(var i = 0; i < n; i++){
        out += s;
    }
    return out
}

console.log(repeat('abc',6))