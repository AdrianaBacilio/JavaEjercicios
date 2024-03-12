let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

let resultDiv5 = document.getElementById("exercise5Result");
resultDiv5.textContent = people.join(", ");

people.splice(1, 1); 
people.splice(2, 1); 
people.unshift("Luis"); 
people.push("YourName"); 

for (let i = 0; i < people.length; i++) {
  resultDiv5.textContent += "," + people[i];
  if (people[i] === "Maria") break;
}

let indexOfMaria = people.indexOf("Maria");
resultDiv5.textContent += "   Index of Maria: " + indexOfMaria;
