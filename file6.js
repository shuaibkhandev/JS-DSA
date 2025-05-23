// Sort Array 

const data = [42, 7, 13, 99];
let sum = 0;
for(let i = 0; i<data.length; i++){



    for(let j =0; j<data.length; j++){
      if(data[i] > data[i+1]){
        let tempNum = data[i];
        data[i] = data[i+1];
        data[i+1] = tempNum;
    }
        
    }
 
}
console.log(data);


