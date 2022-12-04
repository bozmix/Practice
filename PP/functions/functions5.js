/*
Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switchMinAndMax (a) {
    var min = a[0];
    var max = a[0];
    var maxIndex = 0;
    var minIndex = 0;
    var out = [];
    for (var i = 0; i < a.length; i++) {
        if(a[i] < min){
            min = a[i];
            minIndex = i;
        }
        if(a[i] > max){
            max = a[i];
            maxIndex = i;
        }
    }
    for (let i = 0; i < a.length; i++) {
        if(i === minIndex){
            out[i] = max;
        } else if (i === maxIndex){
            out[i] = min;
        } else {
            out[i] = a[i];
        }
    }
    return out
}
console.log(switchMinAndMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/*
Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function transform (a) {
    var out = [];
    for(var i = 0; i < a.length; i++) {
        if(a[i] / 2 + 5 === 0){
            out[i] = 20;
        } else {
            out[i] = a[i] / 2 + 5;
        }
    }
    return out
}

console.log(transform([ 3, 500, -10, 149, 53, 414, 1, 19 ]));

/*
Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

var students = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var points = [ 50, 39, 63, 72, 99, 51, 83, 59 ];

function grade (s, p) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
        if(p[i] < 51){
            out += s[i] + ' acquired ' + p[i] + ' points and failed the exam. \n';
        }
        if(p[i] >= 51 && p[i] < 61){
            out += s[i] + ' acquired ' + p[i] + ' points and earned 6. \n';
        }
        if(p[i] >=61 && p[i] < 71){
            out += s[i] + ' acquired ' + p[i] + ' points and earned 7. \n';
        }
        if(p[i] >=71 && p[i] < 81){
            out += s[i] + ' acquired ' + p[i] + ' points and earned 8. \n';
        }
        if(p[i] >=81 && p[i] < 91){
            out += s[i] + ' acquired ' + p[i] + ' points and earned 9. \n';
        }
        if(p[i] >=91 && p[i] <= 100){
            out += s[i] + ' acquired ' + p[i] + ' points and earned 10. \n';
        }
    }
    return out
}
console.log(grade(students, points));

/*
(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

var a = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

function sort (a) {
    var out = [];
    var b = [], c = [];
    var next = Infinity, current = Infinity;

    for(var i = 0; i < a.length; i++) {
       b[i] = a[i];
       c[i] = a[i];
    }

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (b[j] < a[i]) {
                current = b[j];
                if (current < next) {
                    next = current;
                }    
            }
        }
        out[i] = next;

        for (var k = 0; k < b.length; k++) {
            let l = 0;
            if(b[k] !== next){
                c[l] = b[k];
                l++;
            }
            console.log(c + ' c iz petlje bez jednog clana');
        }
        for (var m = 0; m < c.length; m++) {
            b[m] = c[m];
        }
        console.log(b + ' b iz petlje nakon oduzimanja clana');
        next = Infinity;
    }

    console.log(a, out);
    return out
}
sort(a);

/*
(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/
/*	
Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function program (){
    let sum = 0;
    let output = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        } else if (i <= 500) {
            sum -= i;
        }
    }
    output = 12.5 * sum;
    return output
}

console.log(program());
/*
Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/
function takeTwoLetters (a) {
    let out = '';
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] === 'string' && a[i].length >= 2) {
            out += a[i][0] + a[i][1];
        }
    }
    return out
}
console.log(takeTwoLetters([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));
/*	
Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB

Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
	
Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true

Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/