//Arrow function

function greet(){ //function declaration 1
    console.log('Welcome to the course');
}

greet();

let welcome = function(){  //function declaration 2
    console.log('Welcome again!!');
}

welcome();

//New and easy way to declare function

let fn = () => console.log('Welcome by the new way!!');

//using forEach

let arr = [1,2,3];

/*previous way
array.forEach(function (value, index, arr) {
    console.log(value, '--->', index);
    console.log(arr);
});*/

//new way

arr.forEach(value => console.log(value)); //if working with one parameter
arr.forEach((value, index) => console.log(value)); //if working with more than one parameter

let array = arr.filter(index => index % 2 != 0);
console.log(array);

