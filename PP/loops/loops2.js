/*
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
var e = 3, a = [5, -4.2, 18, 7];
var output = '';
for (var i = 0; i < a.length; i++){
    if(e === a[i]){
        output = 'yes';
        break;
    } else {
        output = 'no';
    }
    console.log(i, output)
}
console.log(output);
/*
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
var a = [-3, 11, 5, 3.4, -8];
var b = [];

for(var i = 0; i < a.length; i++){
    if(a[i] > 0){
        b[i] = 2 * a[i];
    } else {
        b[i] = a[i];
    }
}
console.log(b);

/*
Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
var a = [4, 2, 2, -1, 6];
var min = a[0];
var index = 0;

for(var i = 0; i < a.length; i++){
    if(a[i] < min){
        min = a[i];
        index = i;
    }
}
console.log(min, index);
/*
Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var a = [4, 2, 2, -1, 6];
var min = a[0];
var secMin;
var index = 0;

for(var i = 0; i < a.length; i++){
    if(a[i] < min){
        min = a[i];
        index = i;
    }
}

if(index !== a.length - 1){
    secMin = a[index + 1];
} else {
    secMin = a[index - 1];
}

for(var i = 0; i < a.length; i++){
    if(a[i] < secMin && a[i] > min){
        secMin = a[i];
    }
}

console.log(secMin);

/*
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

var a = [3, 11, -5, -3, 2];
var sum = 0;

for(var i = 0; i < a.length; i++){
    if(a[i] > 0){
        sum += a[i];
    }
}
console.log(sum);

/*
Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/

var a = [3, 4, 12, 8];
var output = 'The array is symmetric';

for(var i = 0; i < a.length / 2; i++){
    if(a[i] !== a[a.length - 1 - i]){
        output = 'The array isn\'t symmetric';
        break;
    }
}
console.log(output);

/*
Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var output = [];

for(var i = 0; i < a.length; i++){
    output[2*i] = a[i];
    output[2*i + 1] = b[i];
}
console.log(output);

/*
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for(var i = 0; i < a.length; i++){
    c[i] = a[i];
    c[a.length + i] = b[i];
}
console.log(c);
/*
Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var j = 0;

var output = [];

for(var i = 0; i < a.length; i++){
    
    if(a[i] !== e){
        output[j] = a[i];
        j++;
    }
}
console.log(output);

/*
Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

var e = 78, p = 0, a = [2, -2, 33, 12, 5, 8];
var j = 0;
var out = [];

for(var i = 0; i < a.length; i++){
    if(i === p){
        out[j] = e;
        j++;
        out[j] = a[i];
        j++;
    } else {
        out[j] = a[i];
        j++;
    }
}

console.log(out);