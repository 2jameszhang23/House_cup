document.getElementById("toggle-gender").addEventListener("click", function() {
  var maleColleges = document.getElementById("male-colleges");
  var femaleColleges = document.getElementById("female-colleges");
  var button = document.getElementById("toggle-gender");

  if (maleColleges.style.display === "none") {
    maleColleges.style.display = "block";
    femaleColleges.style.display = "none";
    button.innerText = "Switch to Female";
  } else {
    maleColleges.style.display = "none";
    femaleColleges.style.display = "block";
    button.innerText = "Switch to Male";
  }
});
