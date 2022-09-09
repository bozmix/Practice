
var a = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
var e = 1;
function removeElement (a, e) {
    var b = [];
    var j = 0;
    for (var i = 0; i < a.length; i++) {
        if(a[i] !== e) {
            b[j] = a[i];
            j++;
        }
    }
    return b
}

console.log(Infinity === Infinity);