function names() {
    let namedValTag = document.querySelector("#name")
    let namedValue = namedValTag.value;
    let regionVal;
    namedVal = namedValue.trim();
    if (/[^a-zA-Z\ ]/.test(namedVal)) {
        namedValTag.style.borderColor = "red"
        // alert("not correct name");
        // return false
        nameError("Enter correct Name")
    } else if (!namedVal) {
        // alert("can't be empty")
        namedValTag.style.borderColor = "red"
        nameError("Name cannot be blank")
    }
    else {
        // alert("valid")
        namedValTag.style.borderColor = "green"
        // return true;
    }

    passwordVerify()
    ageVerify()
    emailVerify()
    genderVerify()
    subjectVerify()
    agree()
    stateVerify(regionVal)
}
function passwordVerify() {
    let password = document.getElementById("password")

    if (/([A-Z])?([a-z])+[^\w]?[\d]+/.test(password.value)) {
        alert(" correct password")
        alert(password.value)
        password.style.borderColor = "green"
    }
    else {
        password.style.borderColor = "red"
        alert(password.value)
        alert("in correct password");
        errorPassword("Enter the password")
    }
}
function ageVerify() {
    let age = document.getElementById("age")
    ageVal = age.value
    ageVal = Number(ageVal)
    if (ageVal > 0 && ageVal < 100) {
        // alert("correct age ")
        age.style.borderColor = "green"
    }
    else if (!ageVal) {
        // alert("enter correct age")
        age.style.borderColor = "red"
        ageError("Age cannot be empty")
    }
    else {
        // alert("incorrect age ")
        age.style.borderColor = "red"
        ageError("Enter correct age")
    }
}
function emailVerify() {
    let email = document.getElementById("email")
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email.value)) {
        // alert("correct email")
        // return true;
        email.style.borderColor = "green"
    } else if (!email.value) {
        email.style.borderColor = "red"
        emailError("Email Id cannot be empty")
    }
    else {
        // alert("You have entered an invalid email address!");
        email.style.borderColor = "red"
        // return false;
        emailError("Please Enter the Valid Email Id")
    }
}
function genderVerify() {
    let gender = document.getElementsByClassName("gender")
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
        
    }
    else
        alert("gender is required")
    // genderborder.style.borderColor = "red"
    genderError("Gender is Required")
}
function subjectVerify() {
    let subject = document.getElementsByClassName("subject")
    let subjectValue;
    let subjectCount = 0;
    for (let i = 0; i < subject.length; i++) {
        if (subject[i].checked) {
            subjectValue += `${subject[i].value},`;
            subjectCount++;
        }
    }
    if (subjectCount > 0) {
        alert("subjected entered succesfully")
        // subject.style.borderColor = "green"
    }
    else alert("subject is required")
    // subject.style.borderColor = "red"
    subjectError("subjects cannot be empty")

}
function agree() {
    let agree = document.getElementById("agree")
    if (agree.checked) {
        console.log("if part");
        alert ("your details submitted")
    } else {
        alert (" please agree to t&c")
        console.log("else part");
       
    }
}
    function stateVerify(x) {
        let region = document.getElementsByClassName("state");
        
        for(let i=0;i<region.length;i++) 
            {
            if (region[i].checked) {
                x = region[i].value
            }
        }
        if (x === "select") {
            // region.style.borderColor = "red"
            alert ("select the correct state")
            stateError("slect the state")
        }
        else if (!x) {
            // region.style.borderColor = "red"
            alert ("select the correct state")
            stateError("select your state")
        }
        else {
            // region.style.borderColor = "green"
            alert(x)
        }
    }
    function nameError(err)
    {
        let nameSpan=document.querySelector("#errname")
        nameSpan.style.visibility="visible";
        nameSpan.innerHTML=err;
    }
    function errorPassword(err)
    {
        let passSpan=document.querySelector("#errpass")
        passSpan.style.visibility="visible";
        passSpan.innerHTML=err;
    }
    function ageError(err)
    {
        let ageSpan=document.querySelector("#errage")
        ageSpan.style.visibility="visible";
        ageSpan.innerHTML=err;
    }
    function emailError(err)
    {
        let emailSpan=document.querySelector("#erremail")
        emailSpan.style.visibility="visible";
        emailSpan.innerHTML=err;
    }
    function genderError(err)
    {
        let genderSpan=document.querySelector("#errgender")
        genderSpan.style.visibility="visible";
        genderSpan.innerHTML=err;
    } 
    function subjectError(err)
    {
        let subjectSpan=document.querySelector("#errsubject")
        subjectSpan.style.visibility="visible";
        subjectSpan.innerHTML=err;
    } 
    function stateError(err)
    {
        let stateSpan=document.querySelector("#errstate")
        stateSpan.style.visibility="visible";
        stateSpan.innerHTML=err;
    }