function countUniqueValues(arr){
  let uniqueValues = [];
  for (let i = 0; i < arr.length; i++) {
    let pointer1 = arr[i];
    let pointer2 = arr[i + 1];
     if(pointer1 === pointer2) {
         pointer2++
     } else {
        uniqueValues.push(pointer1)
        pointer1++
     }
  }
  return uniqueValues.length;
}

countUniqueValues([1, 3, 3, 2, 2, 2, 6, 100, 100]);
