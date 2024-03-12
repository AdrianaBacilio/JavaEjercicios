function doubleNumbers(arr) {
    let doubledArray = arr.map(num => num * 2);
    let resultDiv = document.getElementById("exercise2Result");
    resultDiv.textContent = doubledArray.join(", ");
  }
  
  doubleNumbers([1, 2, 4, 5]); 
  