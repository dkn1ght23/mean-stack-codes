b();

function b(){
    console.log('welcome to js');
}

//js will even work like that cuz function is a first class citizen

console.log(a); //will show undefined but no error

var a = 'hello world';
console.log(a);


//global execution context/scope

function b(){

}

function a(){
    b();
}

a();