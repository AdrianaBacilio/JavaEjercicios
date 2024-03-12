function sumAndProduct(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let product = arr.reduce((acc, curr) => acc * curr, 1);
    let resultDiv = document.getElementById("exercise3Result");
    resultDiv.textContent = `The sum is ${sum}. The product is ${product}.`;
  }
  
  sumAndProduct([1, 2, 3, 4]); 
  