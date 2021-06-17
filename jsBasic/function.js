//Basic of function
/*
function sum(a, b)
{
    console.log(a+b);
}

console.log(typeof sum);

var sum2 = sum;

console.log(typeof sum2);

sum(1,2);
sum2(5,6);
 */

//both sum and sum2 shares reference that is why we can use function as variable

//weird stuff of function

//we will declare function before and will get the answer as well as

var result =  add(11,2);
console.log(result);

function add(a, b)
{
    return a + b;
}

//the reason is that in js function holds the higher priorities (first class citizen)
//after the compile

/*
function add(a, b)
{
    return a + b;
}
var result =  add(11,2);
console.log(result);
*/

//changing data by pass by value and it can be done by immutable
function passByValue(a)
{
    a = 4;
    console.log(a);
}

let x= 10;

passByValue(x);
console.log(x);

//changing data by pass by reference and it can be done by immutable

function arrayPrinter(arr)
{
    arr.push(10);
    //console.log(arr);
}

let mainArray = [1, 2, 3, 4]; //mutable object
console.log(mainArray);

arrayPrinter(mainArray);

console.log(mainArray); //it will impact the sharer elements too

