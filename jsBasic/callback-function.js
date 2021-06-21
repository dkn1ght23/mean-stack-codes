let array = [1,2,3,37];

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}


/*function testgreet() {
    console.log('hi, how are you??');
}

function greet(fn){
    fn();
}

greet(testgreet);

//passing function as parameter to another function

function sum(a, b, callback){
    let result = a + b;
    callback(result);
}

sum(2,3,function(result){
    console.log("Result is ",result);
});*/

//Now back to first example of array

/*


let callbackfn = function(value, index) {
    console.log(value, '--->', index);
}

array.forEach(callbackfn);*/

//easy way to do the same work

array.forEach(function (value, index, arr) {
    console.log(value, '--->', index);
    console.log(arr);
});




