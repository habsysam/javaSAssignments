var dataTable = 0;
var regionVal;
function submit() {
  dataTable = 0;
  regionVal;
  names(dataTable);
  passwordVerify();
  ageVerify();
  emailVerify();
  genderVerify();
  agree();
  stateVerify(st());
  subjectVerify();
}
function names() {
  let namedValTag = document.querySelector("#name");
  let namedValue = namedValTag.value;
  namedValue = namedValue.trim();
  if (/[^a-zA-Z\ ]/.test(namedValue)) {
    namedValTag.style.borderColor = "red";
    // alert("not correct name");
    // return false
    nameError("Enter correct Name");
  } else if (!namedValue) {
    // alert("can't be empty")
    namedValTag.style.borderColor = "red";
    nameError("Name cannot be blank");
  } else {
    // alert("valid")
    namedValTag.style.borderColor = "green";
    // return true;
    dataTable = dataTable + 1;
    console.log(dataTable, "name");
    return dataTable;
  }
}
function passwordVerify() {
  let password = document.getElementById("password");
  if (/([A-Z])?([a-z])+[^\w]?[\d]+/.test(password.value)) {
    //   alert(password.value);
    password.style.borderColor = "green";
    dataTable = dataTable + 1;
    console.log(dataTable, "pass");
    return dataTable;
  } else {
    password.style.borderColor = "red";
    alert(password.value);
    alert("in correct password");
    errorPassword("Enter the password");
  }
}
function ageVerify() {
  let age = document.getElementById("age");
  ageVal = age.value;
  ageVal = Number(ageVal);
  if (ageVal > 0 && ageVal < 150) {
    // alert("correct age ")
    age.style.borderColor = "green";
    dataTable = dataTable + 1;
    console.log(dataTable, "age");
    return dataTable;
  } else if (!ageVal) {
    // alert("enter correct age")
    age.style.borderColor = "red";
    ageError("Age cannot be empty");
  } else {
    // alert("incorrect age ")
    age.style.borderColor = "red";
    ageError("Enter correct age");
  }
}
function emailVerify() {
  let email = document.getElementById("email");
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email.value)) {
    // alert("correct email")
    // return true;
    email.style.borderColor = "green";
    dataTable = dataTable + 1;
    console.log(dataTable, "email");
    return dataTable;
  } else if (!email.value) {
    email.style.borderColor = "red";
    emailError("Email Id cannot be empty");
  } else {
    // alert("You have entered an invalid email address!");
    email.style.borderColor = "red";
    // return false;
    emailError("Please Enter the Valid Email Id");
  }
}
function genderVerify() {
  let gender = document.getElementsByClassName("gender");
  let genderValue;
  let genderCount = false;
  // let genderborder=document.getElementById("gen")
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue = gender[i].value;
      genderCount = true;
    }
  }
  if (genderCount === true) {
    // alert ("gendered entered succesfully")
    // genderborder.style.borderColor = "green"
    dataTable = dataTable + 1;
    console.log(dataTable, "gender");
    return dataTable;
  } else alert("gender is required");
  // genderborder.style.borderColor = "red"
  genderError("Gender is Required");
}

function agree() {
  let agree = document.getElementById("agree");
  if (agree.checked) {
    console.log("if part");
    alert("your details submitted");
    dataTable = dataTable + 1;
    console.log(dataTable, "agree");
    return dataTable;
  } else {
    alert(" please agree to t&c");
    console.log("else part");
  }
}

function st() {
  let region = document.querySelector("#state");
  let yourState = region.value;
  console.log(yourState);
  return yourState;
}

console.log();
function stateVerify(x) {
  // let region = document.getElementsByClassName("state")

  // console.log(st);
  // console.log(region);
  // for (let i = 0; i < region.length; i++) {
  // if (region[i].selected) {
  //   x = region[i].selected;
  // }
  // }
  if (x === "select") {
    // region.style.borderColor = "red"
    alert("select the correct state");
    stateError("slect the state");
  } else {
    // region.style.borderColor = "green"
    alert(x);
    dataTable = dataTable + 1;
    console.log(dataTable, "state");
    console.log(x);
    return dataTable;
  }
}
function subjectVerify() {
  let subject = document.getElementsByClassName("subject");
  let subjectValue = "";
  let subjectCount = 0;
  for (let i = 0; i < subject.length; i++) {
    if (subject[i].checked) {
      subjectValue += `${subject[i].value},`;
      subjectCount++;
      console.log(subjectValue);
    }
  }
  if (subjectCount > 0) {
    //   alert("subjected entered succesfully");
    // subject.style.borderColor = "green"
    dataTable = dataTable + 1;
    // console.log(dataTable);
    console.log(dataTable, "subject");
    //   return dataTable;
    tableIntoData(dataTable, subjectValue);
    console.log("------------------");
    
  } else {
    alert("subject is required");
    // subject.style.borderColor = "red"
    subjectError("subjects cannot be empty");
  }
}
function nameError(err) {
  let nameSpan = document.querySelector("#errname");
  nameSpan.style.visibility = "visible";
  nameSpan.innerHTML = err;
}
function errorPassword(err) {
  let passSpan = document.querySelector("#errpass");
  passSpan.style.visibility = "visible";
  passSpan.innerHTML = err;
}
function ageError(err) {
  let ageSpan = document.querySelector("#errage");
  ageSpan.style.visibility = "visible";
  ageSpan.innerHTML = err;
}
function emailError(err) {
  let emailSpan = document.querySelector("#erremail");
  emailSpan.style.visibility = "visible";
  emailSpan.innerHTML = err;
}
function genderError(err) {
  let genderSpan = document.querySelector("#errgender");
  genderSpan.style.visibility = "visible";
  genderSpan.innerHTML = err;
}
function subjectError(err) {
  let subjectSpan = document.querySelector("#errsubject");
  subjectSpan.style.visibility = "visible";
  subjectSpan.innerHTML = err;
}
function stateError(err) {
  let stateSpan = document.querySelector("#errstate");
  stateSpan.style.visibility = "visible";
  stateSpan.innerHTML = err;
}
function tableIntoData(x, y) {
  // let gender = document.getElementsByClassName("gender");
  // for (let i = 0; i < gender.length; i++) {
  //   if (gender[i].checked) {
  //     var genderValue = gender[i].value;
  //   }
  // }
  // let region = document.getElementsByClassName("state");
  // for (let i = 0; i < region.length; i++) {
  //   if (region[i].checked) {
  //     let regionValue = region[i].value;
  //   }
  // }
  if (x === 8) {
    let gender = document.getElementsByClassName("gender");
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        var genderValue = gender[i].value;
      }
    }
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");
    let data4 = document.createElement("td");
    let data5 = document.createElement("td");
    let data6 = document.createElement("td");
    let data7 = document.createElement("td");

    let tableName = document.getElementById("name");
    let passName = document.getElementById("password");
    let emailId = document.getElementById("email");
    let ageName = document.getElementById("age");

    data1.textContent = tableName.value;
    data2.textContent = passName.value;
    data3.textContent = emailId.value;
    data4.textContent = ageName.value;
    data5.textContent = genderValue;
    data6.textContent =st();
    data7.textContent = y;
    console.log(row);

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);
    row.appendChild(data5);
    row.appendChild(data6);
    row.appendChild(data7);

    console.log(row);

    let table = document.querySelector("#table");
    table.appendChild(row);
    //   let tableHeader = document.querySelector("#tab");
    //   tableHeader.style.visibility = "visible";
  }
}