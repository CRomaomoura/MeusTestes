const insertionSort = array => {
  const len = array.length;//guarda o comprimento do array
  for (let i = 0; i < len; i++) {
    let el = array[i];//manter o valor atual do laço
    let j;//var p/manter posicao atual
    for (j = i - 1; j >= 0 && array[j] > el; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = el; // inserir no array na posiçao atual +1 
  }
  return array; // retornando o array
};
const test = insertionSort([2,4,6,9,5,9,7,20,10]);
console.log(test);