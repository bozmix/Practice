/*
Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
*/

for (var i = 0; i <= 15; i++){
    if (i % 2 === 0){
        console.log('the number ' + i + ' is even');
    } else {
        console.log('the number ' + i + ' is odd');
    }
}

/*
Write a program to sum the multiples of 3 and 5 under 1000.
*/

var sum = 0;

for (var i = 0; i < 1000; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + ' this is i');
        sum += i;
        console.log(sum + ' this is sum')
    }
}

console.log(sum);

/*
Write a program to compute the sum and product of an array of integers.
*/

var arr = [1, 2, 3, 4, 5];
var sum = 0, prod = 1;

for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    prod *= arr[i];
}

console.log(sum, prod);
/*
Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
*/
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var output = '';

for (var i = 0; i < x.length; i++){
    output += x[i];
}
console.log(output);


/*
Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
*/
var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
];

for (var i = 0; i < a.length; i++){
    console.log(a[i]);
}

for (var i = 0; i < a.length; i++){
    for (var j = 0; j < a[i].length; j++){
        console.log(a[i][j])
    }
}

/*
Write a program that outputs the sum of squares of the first 20 numbers. 
*/
var sumOfSquares = 0;

for (var i = 1; i <= 20; i++){
    var square = i * i;
    console.log(sumOfSquares);
    sumOfSquares += square;
    console.log(sumOfSquares);
}

console.log(sumOfSquares);
/*
Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
David
80
Marko
77
Dany
88
John
95
Thomas
68


The grades are computed as follows :

< 60%
F
< 70%
D
< 80%
C
< 90%
B
< 100%
A
*/

/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

Note: This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself.
*/
for (var i = 1; i <= 100; i++){
    if(i % 3 === 0){
        if(i % 5 === 0){
            console.log('FizzBuzz');
        } else {
            console.log('Fizz');
        } 
    } else if(i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
    
}