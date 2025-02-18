const arr = [10,20,30,30]; 

// arr.map((element,index,arr)=>{
// })

const newArr = arr.map(num => num*2); 

console.log(newArr); 

const filt = arr.filter(num=> num%2 === 0); 

console.log(filt); 