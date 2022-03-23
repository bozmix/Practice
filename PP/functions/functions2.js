/*
1. Write a function to check whether the `input` is a string or not. 
"My random string" -> true 
12 -> false 
*/

function isString(a){
    var out;
    if(typeof a === 'string'){
        out = true;
    } else {
        out = false;
    }
    return out
}

console.log(isString(12));

/*
2. Write a function to check whether a string is blank or not. 
"My random string" -> false 
" " -> true 
12 -> false 
false -> false 
*/

function isBlank(a){
    var out = false;
    if(a === ' '){
        out = true;
    }
    return out
}

console.log(isBlank(false));

/*
3. Write a function that concatenates a given string n times (default is 1). 
"Ha" -> "Ha" 
"Ha", 3 -> "HaHaHa" 
*/

function concat (s, n) {
    var out = '';
    var j = 0;
    n = n || 1;
    do {
        out += s;
        j++;
    } while (j < n);
    return out
}

console.log(concat('ha',5))

/*
4. Write a function to count the number of letter occurrences in a string. "My random string", "n" -> 2 
*/

function matches (s, l) {
    var out = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] === l){
            out++;
        }
    }
    return out
}

console.log(matches("My random string", "n"));

/*
5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. 
*/

function firstAppearence (s, l) {
    var position = -1;
    for(var i = 0; i < s.length; i++){
        if(s[i] === l){
            position = i + 1;
            break;
        }
    }
    return position
}

console.log(firstAppearence('something that I wrote for test', 'd'));
/*
6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. 
*/

function lastAppearence (s, l){
    var position = -1;
    for(var i = s.length - 1; i >= 0; i--){
        if(s[i] === l){
            position = i + 1;
            break;
        }
    }
    return position
}

console.log(lastAppearence('something that I wrote for test', 'e'));

/*
7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array. "My random string" -> ["M", "y", null, "r", "a"] "Random" -> ["R", "a", "n", "d", "o", "m"] 
*/

function convertInArray (s){
    var arr = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] === ' '){
            arr[i] = null;
        } else {
            arr[i] = s[i];
        }
    }
    return arr
}

console.log(convertInArray("My rando"));

/*
8. Write a function that accepts a number as a parameter and checks if the number is prime or not. Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
*/

function isPrime (n){
    var out = true;
    if(n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0){
        out = false;
    }
    if(n === 2 || n === 3 || n === 5 || n === 7){
        out = true;
    }
    return out
}

console.log(isPrime(97))

/*
9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator. 
"My random string", "_" -> "My_random_string" 
"My random string", "+" -> "My+random+string" 
"My random string" -> "My-random-string" 
*/

function space(s, c){
    var out = '';
    c = c || '-';
    for(var i = 0; i < s.length; i++){
        if(s[i] === ' '){
            out += c;
        } else {
            out += s[i];
        }
    }
    return out
}

console.log(space("My random string"));

/*
10. Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function hide (s, n){
    var out = '';
    for(var i = 0; i < n; i++){
        out += s[i];
    }
    out += '...';
    return out
}

console.log(hide('my random string',5));

/*
Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

function getNumbers(a){
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

console.log(getNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));

/*
Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
*/

function toRetirement(birth, gender){
    var out;
    if (2022 - birth >= 65 && gender === 'm'){
        out = 'You are already retired';
    } else if(2022 - birth < 65 && gender === 'm'){
        out = birth + 65 - 2022;
    } else if(2022 - birth >= 60 && gender === 'f'){
        out = 'You are already retired';
    } else if(2022 - birth < 60 && gender === 'f'){
        out = birth + 60 - 2022;
    }
    return out
}

console.log(toRetirement(1957,'m'));

/*
Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/

function ordinary(n){
    var out = n + 'th';
    if(n % 10 === 1 || n === 1){
        out = n + 'st';
    }
    if(n % 10 === 2 || n === 2){
        out = n + 'nd';
    }
    if(n % 10 === 3 || n === 3){
        out = n + 'rd';
    }
    if(n === 11){
        out = n + 'th';
    }
    if(n === 12){
        out = n + 'th';
    }
    if(n === 13){
        out = n + 'th';
    }
    return out
}

console.log(ordinary(33))