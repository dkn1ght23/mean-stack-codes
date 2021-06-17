let boolValue = true;
console.log(typeof boolValue);

let value = String(boolValue);
console.log(value);
console.log(typeof value); //Convert bool to string

let divideString = "6" / "2";
console.log(divideString);
console.log(typeof divideString); //Automatically will guess as number

let str = "123456";
let num = Number(str);
console.log(num);
console.log(typeof num); //Convert string to number

let str1 = "123456xyz";
let num1 = Number(str1);
console.log(num1); //Can not convert string to number if there is at least one char, will show NaN