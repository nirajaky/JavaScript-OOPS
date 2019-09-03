let vals = [1,2,4,20,10, "Niraj"];

// function doubler(x) {
// 	return x *2;
// }

console.log("Previous" , vals);

// vals = vals.map(doubler);

// vals = vals.map(function (x) {
// 	return x *2;
// });

vals = vals.map(x => x*2);

console.log("After" , vals);

/////////////////////////////
//===========================
/////////////////////////////

// vals.fill(Math.random()); // fill() is usd to fill each elements some value; arguments should be value not function

let value = new Array(100);

value = value.fill(0).map(x => Math.floor(Math.random() * 256)); // random value of array

// value = value.fill(0).map(() =>Math.floor(Math.random() * 256)); // random value of array

console.log(value);