function slice(array, start, end) {
  let slicedArray = []; //1
  for (let i = start; i < end; i++) { //7
    slicedArray.push(array[i]); //3
  }
  return slicedArray; //1
}

module.exports = { slice }; 

/**
T_01 = 1 + 7 + i(3) + 1 = 1 + 1 + n(1) + 1
T_01 = n = O(n) 
T_01 = Linéaire 
*/
