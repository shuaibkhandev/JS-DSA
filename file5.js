// Merge array 


// let evenData = [1,3,5,7,9];
// let oddData = [2,4,6,8];
// let mergeData = [];
// console.log(evenData.length);

// for(let i=0; i<evenData.length; i++){
//     // mergeData.push(evenData[i]);
//     mergeData[i] = evenData[i];
// }

// for(let i=0; i<oddData.length; i++){
//     // mergeData.push(oddData[i])
//     mergeData[evenData.length+i] = oddData[i]
// }

// console.log("MERGE DATA: ",mergeData);


let dataOne = [1,3,5,7,9,11,13,15,17,19];
let dataTWO = [2,4,6,8,10,12,14,16,18];
let dataThree = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while(d1<dataOne.length && d2<dataTWO.length){
  if(dataOne[d1] < dataTWO[d2]){
    dataThree[d3] = dataOne[d1];
    d1++;
  }else{
    dataThree[d3] = dataTWO[d2];
    d2++;
  }
  d3++;
}

while(d1<dataOne.length){
  dataThree[d3] = dataOne[d1];
  d1++;
  d3++;
}

console.log(dataThree);

