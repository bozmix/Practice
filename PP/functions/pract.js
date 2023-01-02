


var global = 'global';

function func () {
    var global;
    console.log(global);
    global = 1;
    console.log(global);
}
func();
console.log(global);