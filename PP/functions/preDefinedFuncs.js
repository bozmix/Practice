/*
Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/

function toNumber (a){
    var out = [];
    var j = 0;
    for(var i = 0; i < a.length; i++){
        if(isFinite(parseFloat(a[i]))){
            out[j] = parseFloat(a[i]);
            j++;
        }
    }
    return out
}

console.log(toNumber(["1", "21", undefined, "42", "1e+3", Infinity]));

/*
Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/

function join (a) {
    var out = '';
    for(var i = 0; i < a.length; i++){
        if(isFinite(parseFloat(a[i])) || typeof a[i] === 'boolean'){
            out += a[i];
        }
    }
    return out
}

console.log(join([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*
Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/

function filterFalsy (a){
    var out = [];
    var j = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i]){
            out[j] = a[i];
            j++;
        }
    }
    return out
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*
Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/

function howMany (a) {
    var out = 0;

    for(var i = 0; i < a.length; i++){
        if(typeof a[i] === 'number' && parseFloat(a[i]) === parseInt(a[i]) && isFinite(a[i])){
            out++;
        }
    }
    return out
}

console.log(howMany([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/*
Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/

function howMany2 (a){
    var out = 0;
    for(var i = 0; i < a.length; i++){
        if(typeof a[i] === 'number' && isFinite(a[i])){
            if((parseInt(a[i]) - a[i]) !== 0){
                out++;
            }
        }
    }
    return out
}

console.log(howMany2([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

