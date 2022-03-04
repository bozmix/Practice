/*var num = 3;

if (num % 2 === 0) {
    console.log('number is even');
} else {
    console.log('number is odd');
}

var num = 12;

if (num % 5 === 0 && num % 3 === 0){
    console.log(num);
}


var a = 2, b = 4, c = -7;

var pr = a * b * c;

if (pr >= 0) {
    console.log('the sign is +');
} else {
    console.log('the sign is -');
}


var a = 10;

if (typeof a === 'number'){
    if (a % 2 === 0){
        var res = a / 2;
        console.log(a + ' / 2 = ' + res);
    } else {
        console.log('X');
    }
} 

var a = -5, b = -2, c = -6, d = 0, e = -1;

if (a > b){
    if (a > c){
        if (a > d){
            if (a > e){
                console.log(a);
            } else {
                console.log(e);
            }
        } else if (d > e){
            console.log(d);
        } else {
            console.log(e);
        }
    } else if (c > d && c > e){
        console.log(c);
    } else if (d > e){
        console.log(d);
    } else {
        console.log(e);
    }
} else if (b > c && b > d && b > e){
    console.log(b);
} else if (c > d && c > e){
    console.log(c);
} else if (d > e){
    console.log(d);
} else {
    console.log(e);
}
*/

var a = 1, b = 0, c = -3;

if (a > b && a > c){
    if (b > c){
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} else if (a < b && b > c){
    if (a < c){
        console.log(b, c, a);
    } else {
        console.log(b, a, c);
    }
} else if (a < c && b < c){
    if(a < b){
        console.log(c, b, a);
    } else {
        console.log(c, a, b);
    }
}
