/*
Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
*/

function countVowels (s) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a': counter++;
                break;
            case 'e': counter++;
                break;
            case 'i': counter++;
                break;
            case 'o': counter++;
                break;
            case 'u': counter++;                
                break;
            case 'A': counter++;                
                break;
            case 'E': counter++;                
                break;
            case 'I': counter++;                
                break;
            case 'O': counter++;                
                break;
            case 'U': counter++;                
                break;

            default:
                break;
        }
    }
    return counter
}
console.log(countVowels('narrow SEA'));
/*
Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

function combine (s, a) {
    let out = [];
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        out[j] = s[i];
        j++;
        out[j] = a[i];
        j++;
    }
    return out
}

console.log(combine(['a','b','c'], [1,2,3]));

/*
Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/
 
function rotate (a, k) {
    let out = [];
    for (let i = 0; i < a.length; i++) {
        if (i > k - 1) {
            out[i - k] = a[i];
            //console.log(i, out, 'iz prvog dela if');
        } else {
            out[a.length - k + i] = a[i];
            //console.log(i, out, 'iz drugog dela if');
        }
    }
    return out
}

console.log(rotate([1,2,3,4,5,6], 2));

/*
Write a function that takes a number and returns array of its digits.
*/
 
function makeArray (n) {
    let out = [];
    let dout = [];
    let i = 0;
    let a = 1;
    let d = n;
    let j = 0;
    while (d > 0.9) {
        i = d / 10;
        a = d % 10;
        out[j] = a;
        j++;
        d = i - (a * 0.1);
    }
    for (let k = 0; k < out.length; k++) {
        dout[out.length - 1 - k] = out[k];
    }
    return dout
}

console.log(makeArray(1543658));

/*
Write a program that prints a multiplication table for numbers up to 12.
*/

function printTable () {
    for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 12; j++) {
            console.log(i + ' x ' + j + ' = ' + (i * j));
        }
    }
}

printTable();

/*
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

function toFahrenheit (t) {
    let f = (t * 1.8) + 32;
    return f
}

console.log(toFahrenheit(0));

/*
Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/

function findMax (a) {
    let max = 1;
    let out = [];
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number') {
            out[j] = a[i];
            j++;
            if (a[i] > max) {
                max = a[i];
            }   
        }
    }
    return [out, max]
}

console.log(findMax([1, 3, 5, 65, 25, 'none', true, 60]));

/*
Write a function to find the maximum and minimum elements. Function returns an array.
*/
console.log(maxAndMin([2, 3, 5, 65, 25, 60]));

function maxAndMin (a) {
    let max = 0;
    let min = Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        } 
        if (a[i] < min) {
            min = a[i];
        }
    }
    return [min, max]
}


/*
Write a function to find the median element of array.
*/

function median (a) {
    let med;
    if (a.length % 2 === 0){
        med = (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
    } else {
        med = a[a.length / 2 - 0.5];
    }
    return med
}

console.log(median([2, 3, 5, 65, 25, 60, 20]))

/*
Write a function to find the element that occurs most frequently.

 


Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

 


Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

 


Write a function to find all the numbers greater than the average.

 


The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40

 



Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/
function printInFrame (a) {
    let wordLength = 0;
    let lineLength;
    let out = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > wordLength) {
            wordLength = a[i].length;
        }
    }
    lineLength = wordLength + 4;
    let normalizedWords = [];
    let normalizedWord = '* ';
    for (let i = 0; i < a.length; i++) {
        let word = a[i];
        normalizedWord += word;
        for (let j = normalizedWord.length - 1; (j < lineLength - 2 && j >= normalizedWord.length - 2); j++) {
            normalizedWord += ' ';
        }
        normalizedWord += '*';
        normalizedWords[i] = normalizedWord;
        normalizedWord = '* ';
    }
    //console.log(normalizedWords);
    
    let firstLine = '';
    
    for (let i = 0; i < lineLength; i++) {
        firstLine += '*';
    }
    //console.log(firstLine);
    out = firstLine + '\n';
    for (let i = 0; i < normalizedWords.length; i++) {
        out += normalizedWords[i] + '\n';
    }
    out += firstLine;
    console.log(out)
}

printInFrame(["Hello", "World", "in", "a", "frame"]);