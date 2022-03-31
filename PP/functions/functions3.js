/*
Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

function insert (s, t, p){
    var out = '';
    p = p || 0;
    for(var i = 0; i < s.length; i++){
        if(i === p){
            out += t + s[i];
        } else {
            out += s[i];
        }
    }
    return out
}

console.log(insert("My random string", "JS ", 10));

/*
Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/

function makeString (a){
    var out = '';
    for(var i = 0; i < a.length; i++){
        if(a[i] !== undefined && a[i] !== null && !isNaN(a[i]) && a[i] !== Infinity){
            out += a[i];
        }
    }
    return out
}

console.log(makeString([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));

/*
Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
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
Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
*/

function reverse (n){
    var out = 0;
    var outs = '';
    var s = n + '';
    for(var i = s.length - 1; i >= 0; i--){
        outs += s[i];
    }
    out = parseInt(outs);
    return out
}
console.log(reverse(123455555), typeof reverse(123455555));

/*
Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
*/

function lastNElements (a, n){
    n = n || 1;
    var out = [];
    var j = n - 1;
    for(var i = a.length - 1; i >= a.length - n; i--){
        out[j] = a[i];
        j--;
    }
    return out
}

console.log(lastNElements([7, 9, 0, -2],3));

/*
Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

function makeArray (n, e) {
    var out = [];
    e = e || null;
    for(var i = 0; i < n; i++){
        out[i] = e;
    }
    return out
}

console.log(makeArray(2,'e'));

/*
Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

function isPerfect (n) {
    var out = n + ' is not a perfect number';
    var s = 0;
    for(var i = 1; i <= (n/2); i++){
        if(n % i === 0){
            s += i
        }
    }
    if(s === n){
        out = n + ' is a perfect number';
    }
    return out
}

console.log(isPerfect(8128));

/*
Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/

function findWord(s, w){
    w = w || '';
    var words = [], possibleMatches = [];
    var j = 0, k = 0;
    var word = '';
    var out = [];
    var counter = 0;
    for(var i = 0; i < s.length; i++){
        if(i >= 0 && s[i] !== ' '){
            word += s[i];
        } else {
            words[j] = word;
            word = '';
            j++;
        }
        words[j] = word;
    }

    for(var i = 0; i < words.length; i++){
        if(words[i].length === w.length){
            possibleMatches[k] = words[i];
            k++;
        }
    }

    for(var i = 0; i < possibleMatches.length; i++){
        var z = 0;
        for(var j = 0; j < possibleMatches[i].length; j++){
            if(possibleMatches[i][j] !== w[j]){
                out = [];
                break;
            } else {
                out[z] += possibleMatches[i][j];
            }
        }
        if(out.length){
            counter++;
            out = [];
        }
    }
    return '\'' + w + '\' was found ' + counter + ' times';
}

console.log(findWord('the quick really quick quick brown fox', 'quick'));

/*
Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/

function hideAddress (a){
    var out = '';
    var indexHide = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i] === '@'){
            indexHide = i;
            break;
        }
    }
    for(var i = 0; i < a.length; i++){
        if(i < 2 || i >= indexHide){
            out += a[i];
        } 
        if(i === 2) {
            out += a[i] + '...';
        }
    }
    return out
}

console.log(hideAddress("myemailaddress@bgit.rs"));

/*
Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function theMostFrequent (a){
    var n = 1;
    var repeats = [];
    var max = 0;
    var index = 0;
    for(var i = 0; i < a.length; i++){
        for(var j = i + 1; j < a.length; j++){
            if(a[i] === a[j]){
                n++;
            }
        }
        repeats[i] = n;
        n = 1;
    }
    for(var i = 0; i < repeats.length; i++){
        if(repeats[i] > max){
            max = repeats[i];
            index = i;
        }
    }
    return 'the element \'' + a[index] + '\' is the most frequent in the array and it appears ' + max + ' times';
}
console.log(theMostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
/*
Please write a function or explain how would you find two elements in an array of integer numbers (e.g. array = [1, 3, 1, 2, 8, 4]) that add up to some number K (e.g. K=7). The function should accept parameters: array (e.g. array = [1, 3, 1, 2, 8, 4]) and K (e.g. K=7), and return appropriate two elements (e.g. [3, 4]). If there are no two elements that can make number K in total, it should return null. Also, the function should not have more than one loop in it. *
*/


let input = [3, 5, 7, 9, 4, 8, 5, 12, 4, 9, 16, 5];
let dSum = 13;
let set = new Set();

for(item of input) {
  let num = dSum - item;
  if(set.has(num)) {
    console.log(num + " " + item);
    break;
  }
  set.add(item);
}
