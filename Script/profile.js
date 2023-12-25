let studentName = document.querySelector(".student-name");
let studentUserName = document.querySelector(".student-user-name");
let studentFieldOfStudy = document.querySelector(".fieldOfStudy-student");
let studentGrade = document.querySelector(".grade-student");
let studentAge = document.querySelector(".age-student");

// functions

function informationStudent() {
  // name and last name
  studentName.innerHTML =
    JSON.parse(localStorage.getItem("nameStudent")) +
    " " +
    JSON.parse(localStorage.getItem("lastNameStudent"));
  // username
  studentUserName.innerHTML = JSON.parse(
    localStorage.getItem("UserNameStudent")
  );
  //
  studentFieldOfStudy.innerHTML = JSON.parse(
    localStorage.getItem("fieldOfStudyStudent")
  );
  //
  studentGrade.innerHTML = JSON.parse(localStorage.getItem("gradeStudent"));
  studentAge.innerHTML = JSON.parse(localStorage.getItem("ageStudent"));
}

// ageStudent
// fieldOfStudyStudent
// gradeStudent
// lastNameStudent
// nameStudent
// UserNameStudent
// رشته تحصیلی fieldOfStudyStudent

window.addEventListener("load", informationStudent);
