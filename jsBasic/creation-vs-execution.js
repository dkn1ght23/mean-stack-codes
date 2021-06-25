/*function b(){
    //var myVar = 3;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
console.log(myVar);

output 1 1*/




function a() {
    var myVar = 2;
    function b(){
        //var myVar = 3;
        console.log(myVar);
    }
    b();
}

var myVar = 1;
a();
console.log(myVar);

//output 2 1
