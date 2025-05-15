// Search Element in Array 
// we live use here linear search 
// Linear search means checking each element in the array one by one from the start.
// That is, we first check the first item, then the second, then the third one and so on.



// code for to find an item in an array
// const data = [0,10,20,30,40,60,70,80,90,99];
// let item = 60;
// let index = undefined;
// let found = false;

// for(let i=0; i<data.length; i++){
//     if(item == data[i]){
//     console.log(`The item is available in the array at index ${i}: ${data[i]}`);
//         found = true;
//         index = i;
//         break;
//     }
// }

// if(!found){
//     console.log(`The item ${item} is not available in the array.`);
// }


// code for to find multi items in an array

// const data = [0,10,20,30,40,60,70,80,90,60,99];
// let item = 60;
// let index = undefined;
// let foundIndexes = [];

// for(let i=0; i<data.length; i++){
//     if(item === data[i]){
//         foundIndexes.push(i)
//     }
// }

// if(foundIndexes.length > 0){
//     console.log(foundIndexes.join(", "));
// }else{
//     console.log(`The item is not available in the array.`);
// }


// search Element with indexof defult method
// const data = [0,10,20,30,40,60,70,80,90,60,99];
// let item = 60;

// console.log(data.indexOf(item));


// indexof method for multiple items in array
const data = [0,10,20,30,40,60,70,80,90,60,99];
let item = 50;

let indexes = [];
let currentIndex = data.indexOf(item);

while(currentIndex !== -1){
indexes.push(currentIndex);
currentIndex = data.indexOf(item, currentIndex+1);
}

if (indexes.length > 0) {
    console.log(`The item ${item} is found at indexes: ${indexes.join(", ")}`);
} else {
    console.log(`The item ${item} is not found in the array.`);
}