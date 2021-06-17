//JavaScript object
let obj = {};

console.log(typeof obj);

//To add value into obj we need to use dot notation

obj.Name='mujammal';
obj.Age = 23;
obj.Profession ='student';
obj.IsNative = true;
console.log(obj);

//Another way to do it is using the way we use map (associative index value pair)

obj['subject'] = 'JavaScript';

console.log(obj);

let indexKey = 'Address';

obj[indexKey] = "Sylhet - 3100, Bangladesh";

console.log(obj);

//value access of object

console.log(obj.Name);
console.log(obj.Age);
console.log(obj[indexKey]);

//Json object

let hello = {
    Name: 'Mujammal Ahmed'
};

let address = {
    Street: 'Wall Street',
    RoadNo: '28/2',
    "Country":"England",
}

console.log(address);

hello.Address = address;

console.log(hello);

//Delete property from obj but bad practice

delete address.Country;

console.log(address);

//assign

//let address2 = Object.assign(target: {}, address);
//console.log(address2);

console.log(Object.keys(hello));

//if we reference one obj with another

let x = {
    Name: "dk23",
    Age : 23,
    Profession : 'student'
}

console.log(x);

let y = x;

y.Name = "Changed name";

console.log(x);

//we have changed y.Name but as we print x.Name we can see that it has changed
//that's because we referenced x to y. Every Y change will change x too.


