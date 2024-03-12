function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  let sortedArray = bubbleSort([3, 6, 12, 5, 100, 1]);
  let resultDiv6 = document.getElementById("exercise6Result");
  resultDiv6.textContent = sortedArray.join(", ");
  