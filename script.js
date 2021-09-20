
const weightBox = document.querySelector("#weight")
const heightBox = document.querySelector("#height")
const bmiSpan = document.querySelector("#bmi")

function computeBMI() {
  var weight = weightBox.value;
  var height = heightBox.value;
  if (document.getElementById("pounds").checked) {
    if (document.getElementById("feet").checked) {
      var bmi = (weight * 0.453592) / (height * 0.3048) ** 2
	  }else if (document.getElementById("meters").checked) {
      var bmi = (weight * 0.453592) / (height) ** 2
    }
	}else if (document.getElementById("kilograms").checked) {
    if (document.getElementById("feet").checked) {
      var bmi = (weight) / (height * 0.3048) ** 2
	  }else if (document.getElementById("meters").checked) {
      var bmi = (weight) / (height) ** 2
    }
  }
  bmiSpan.textContent = bmi
}

function clickKg() {
	if (document.getElementById("kilograms").checked) {
		document.getElementById("pounds").checked = false;
	}
}

function clickLb() {
	if (document.getElementById("pounds").checked) {
		document.getElementById("kilograms").checked = false;
	}
}

function clickM() {
	if (document.getElementById("meters").checked) {
		document.getElementById("feet").checked = false;
	}
}

function clickFt() {
	if (document.getElementById("feet").checked) {
		document.getElementById("meters").checked = false;
	}
}

document.getElementById("kilograms").onchange = clickKg;
document.getElementById("pounds").onchange = clickLb;
document.getElementById("meters").onchange = clickM;
document.getElementById("feet").onchange = clickFt;

weightBox.addEventListener('input', computeBMI)
heightBox.addEventListener('input', computeBMI)