// array estático

 //array[5]= [1,2,3,4,5]
 // array dinâmico 
 /* Em Js os arrays são dinâmicos por padrão, o que significa que você 
 não precisa iniciar com um tamanho */
 //let array = []

 //Operações com arrays 

// Percorrer o array 
let numbers = [1,2,3,4,5,6]
for(number of numbers){
  console.log(number)
}


// Inserção
function insertElements(arr,x, pos){
  let i = arr.length-1
  for(i; i>= arr.length; i--){
    arr[i+1] = arr[i]

  }
arr[pos] = x;
return arr;

}
number = [1,2,3,4,5,7,6]
console.log(insertElements(number, 10, 3))

// deleção 
function findElement(arr, key){
  let i;
  for(i=0; i< arr.length; i++){
    if(arr[i] ==key){
      return i;
    } return -1;
    
  }
 
}
function deleteElement(arr, key){
  let pos = findElement(arr, key)
  if(pos ==-1){
    console.log("Elemento não encontrado")
    return 0
  }
  let i;
  for(i = pos; i<arr.length; i++){
    arr[i] = arr[i+1]
    return arr.length-1;
  }
}


console.log(deleteElement(number,1))
console.log(number)