


var global = 'global';

function func () {
    var global;
    console.log(global);
    global = 1;
    console.log(global);
}
func();
console.log(global);

let arr = [1, 2, 3, 4, 5, 6];
arr[7] = 7;
console.log(arr);

let s = 'abcd';
console.log(s[1]);

let hero = {
    name: 'Leonardo',
    kind: 'Turtle',
    color: 'Green',
    age: 13,
    talk: function (param) {
        return 'I am ' + param + '.'
    }
};
console.log(hero);
hero = {property: 'try'}
console.log(hero);