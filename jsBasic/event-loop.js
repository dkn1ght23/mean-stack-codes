console.log(1);
setTimeout(() => console.log(2), 5000); //will wait to print
console.log(3);
console.log('break');
//
console.log(1);
setTimeout(() => console.log(2), 5000);
console.log(3);
setTimeout(() => console.log(4), 2000);

//here 4 will be printed before 2 because of stetimeout
//they are called non blocking io
//js doesn't block the path of instant execution for any future execution

