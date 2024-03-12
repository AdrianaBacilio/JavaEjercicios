let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses() {
  let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
  let resultDiv = document.getElementById("exercise4Result");
  resultDiv.textContent = commonCourses.join(", ");
}

findCommonCourses(); 
