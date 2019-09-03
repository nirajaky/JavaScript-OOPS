let vals = [5,4,1,2,9];

// function sum(acc, val) {
// 	return acc + val;
// }

// SUM
let answer = vals.reduce((acc, val) => acc + val); // "val" will iterate each value of array


// let answer = vals.reduce(sum, 20);   answer is 41

console.log(answer);

// BIGGEST
let biggest = vals.reduce((acc, val) => {  // "val" will iterate each value of array
 	if(val > acc){
 		acc = val;
 	}
 	return acc;
    });

console.log(biggest);

// BIGGEST
let biggest2 = vals.reduce((a, b) => a>b? a : b , 25);  // sets "a" values to 25 initially

console.log(biggest2);