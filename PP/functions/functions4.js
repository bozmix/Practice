/*
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function checkElement (a, e){
    var out = 'no';
    for(var i = 0; i < a.length; i++){
        if(a[i] === e){
            out = 'yes'
        }
    }
    return out
}

console.log(checkElement([5, -4.2, 18, 7], 3));

/*
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multiplyPositive(a){
    var out = [];
    for(var i = 0; i < a.length; i++){
        if(a[i] > 0){
            out[i] = 2 * a[i];
        } else {
            out[i] = a[i];
        }
    }
    return out
}

console.log(multiplyPositive([-3, 11, 5, 3.4, -8]));

/*
Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function findMinimum(a){
    var min = a[0];
    var index = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i] < min){
            min = a[i];
            index = i;
        }
    }
    console.log(min, index);

    return min
}

findMinimum([4, 2, 2, -1, 6]);

/*
Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

function secondMin (a) {
    var min = a[0];
    var secMin = Infinity;
    for (let i = 0; i < a.length; i++) {
        if(a[i] < min){
            min = a[i];
        }
    }
    for (let i = 0; i < a.length; i++) {
        if(a[i] > min && a[i] < secMin){
            secMin = a[i];
        }
    }
    console.log(secMin);
    return secMin
}
secondMin([4, 4, -1, 6, 3]);

/*
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumOfPositive (a){
    var out = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i] > 0){
            out += a[i];
        }
    }
    return out
}

console.log(sumOfPositive([3, 11, -5, -3, 2]));

/*
Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/


function isSymmetric (a){
    var out = 'The array is not symmetric';
    for (let i = 0; i < a.length / 2; i++) {
        if(a[i] === a[a.length - i - 1]){
            out = 'The array is symmetric'
        } else {
            out = 'The array is not symmetric';
            break;
        }
    }
    return out
}

console.log(isSymmetric([2, 4, -2, -2, 4, 2]));
/*
Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

function intertwines(a, b){
    var out = [];
    for (let i = 0; i < a.length; i++) {
        out[2*i] = a[i];
        out[2*i + 1] = b[i];        
    }
    return out
}

console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));

/*
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concat (a, b){
    var out = [];
    for (let i = 0; i < a.length; i++) {
        out[i] = a[i];
        out[a.length + i] = b[i];
    }
    return out
}

console.log(concat([4, 5, 6, 2], [3, 8, 11, 9]));

/*
Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElement(a, e){
    var out = [];
    var j = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] !== e){
            out[j] = a[i];
            j++;
        } 
    }
    return out
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 6));

/*
Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insertElement (a, e, p){
    var out = [];
    var j = 0;
    if(p > a.length){
        return 'error, position is out of range';
    }

    if(p === a.length){
        out[a.length] = e;
    }

    for (let i = 0; i < a.length; i++) {
        if(i === a.length && p === a.length){
            out[j] = e;
            break;
        }
        if(i !== p){
            out[j] = a[i];
            j++;
        } else {
            out[j] = e;
            j++;
            out[j] = a[i];
            j++;
        }
    }
    return out
}

console.log(insertElement([2, -2, 33, 12, 5, 8], 78, 0));