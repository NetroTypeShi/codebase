/*
console.log(array.length); //5
console.log(array[array.length-1]); //undefined
console.log(array[0]); //1
console.log(array[array.length - 1]); //5
array.push(6);// mete un 6
console.log(array); //[1, 2, 3, 4, 5, 6]
*/

const array = [1, 2, 3, 4, 5];
array.forEach(valor=>{
    resultado.push(valor+=1)
})
console.log(array);
console.log(resultado);
array.forEach((valor, index)=>{
     console.log(index, valor)
     array[index] += 1
})
console.log(array)
/**
console.log(array[1]); //2
console.log(array[2]); //3
console.log(array[3]); //4
console.log(array[4]); //5
console.log(array[5]); //undefined
console.log(array[array.length + 1]); //undefined
console.log(array[-1]); //undefined
console.log(array[-2]); //undefined
console.log(array[-3]); //undefined


array.pop(); //6
console.log(array); //[1, 2, 3, 4, 5]

array.unshift(0);
console.log(array); //[0, 1, 2, 3, 4, 5]

array.shift(); //0
console.log(array); //[1, 2, 3, 4, 5]

array.splice(2, 0, 2.5);
console.log(array); //[1, 2, 2.5, 3, 4, 5]

array.splice(2, 1);
console.log(array); //[1, 2, 3, 4, 5]
**/
