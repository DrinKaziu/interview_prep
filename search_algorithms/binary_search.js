//find the index of num in the array 

function binarySearch(arr, num){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while(arr[middle] !== num && left <= right) {
      if (arr[middle] > num) right = middle - 1;
      else left = middle + 1
      middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === num ? middle : -1
}
