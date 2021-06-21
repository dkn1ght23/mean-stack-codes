//Array is an object

let val = [2, 'abc', 5.5, true ];
let val2 = [8, 4.5, false ];

console.log(val);
console.log(val.length);

for(let i=0;i<val.length;i++){
    let item = val[i];
    console.log(item, typeof item);
}

val.push(15);
val.push('xyz');
//val.push(15, 'xyz); we can add like this too
console.log(val);

val.pop();
console.log(val);

val.push(...val2); //add another array like this
console.log(val);

//using filter

let array = [1,2,3,37];

let arr = array.filter(function (value, index) { //depends on condition
    return index % 2 != 0;jhnb
})

console.log(arr);

//use map

let arr3 = array.map(function (value, index) { //always insert
    return value *2;
})
console.log(arr3);