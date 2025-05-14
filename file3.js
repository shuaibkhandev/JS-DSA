// Insert Element in Array 

const demo = document.getElementById("demo");
// const arr = [10,23,43,11,50,24,45,8,16];

// function InsertEle(){
//     let input = document.getElementById("eleInput");
//     let eleValue = Number(input.value);
//     arr.push(eleValue);
//     input.value = "";
//     demo.innerHTML = arr
//     console.log(arr);
// }

// function removeLastEle(){
//     arr.pop(); 
//     demo.innerHTML = arr;
//         console.log(arr);
// }


// const fruits = ["Banana", 'Mango', 'Apple', 'Peach', 'Strawberry'];
// fruits.splice(-1,0,"Orange","Grapes");
// console.log(fruits);



// const numArray = [1,2,3,4,5,6,7,8,9];

// const position = document.getElementById("position");
// const count = document.getElementById("count");
// const items = document.getElementById("items");

// function calledSpliceMethod(){

//    const newItems = items.value.split(",").map((item)=> Number(item.trim()))

//     numArray.splice(Number(position.value), Number(count.value), ...newItems);
//     document.getElementById('demo').innerHTML = numArray
//     console.log(numArray);
// }

// document.getElementById('demo').innerHTML = numArray


let data = [10,20,40,50,60];
const newEle = 30;
const pos = 2;
console.log(data);

for(let i = data.length-1; i>=pos; i--){
    data[i+1] = data[i]
    if(i==pos){
        data[i] = newEle;
    }
}
console.log(data);
