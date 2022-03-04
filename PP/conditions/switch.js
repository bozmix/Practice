/*
Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”.*/

var day = 8;
var result = '';
switch (day){
    case 1: result = 'Monday';
    break;
    case 2: result = 'Tuesday';
    break;
    case 3: result = 'Wednesday';
    break;
    case 4: result = 'Thursday';
    break;
    case 5: result = 'Friday';
    break;
    case 6: result = 'Saturday';
    break;
    case 7: result = "Sunday";
    break;
    default: result = "I don\'t know";
    break;
}
console.log(result);

/*
Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
*/
var day = 5;
var result = '';
switch (day){
    case 1: result = 'Monday';
    break;
    case 2: result = 'Tuesday';
    break;
    case 3: result = 'Wednesday';
    break;
    case 4: result = 'Thursday';
    break;
    case 5: result = 'Friday';
    break;
    case 6: result = 'Saturday';
    break;
    case 7: result = "Sunday";
    break;
    default: result = "Input must be a number between 1 and 7";
    break;
}
console.log(result);


/*
Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/
var day = 8;
var result = '';
switch (day){
    case 1: result = 'It\’s weekday';
    break;
    case 2: result = 'It\’s weekday';
    break;
    case 3: result = 'It\’s weekday';
    break;
    case 4: result = 'It\’s weekday';
    break;
    case 5: result = 'It\’s weekday';
    break;
    case 6: result = 'It\’s weekend';
    break;
    case 7: result = "It\’s weekend";
    break;
    default: result = "Input must be a number between 1 and 7";
    break;
}
console.log(result);

/*
Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.

Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 

Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
*/
var a = 5, b = 0;
var operator = '/';
var result;

switch (operator){
    case '+': result = a + b;
    break;
    case '-': result = a - b;
    break;
    case '*': result = a * b;
    break;
    case '/':
        if (b === 0){
            result = 'Error. Division by zero';
            break;
        } else {
            result = a / b;
            break;
        }
    default: result = 'I don\'t know';
    break;
}
console.log(result);