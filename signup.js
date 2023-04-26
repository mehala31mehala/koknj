function validate(event) {
    event.preventDefault();
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const createpassword = document.getElementById("createpassword").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    if (fname == "") {
        document.getElementById("error").innerHTML = "enter your fistname";
    } else {
        document.getElementById("error").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("error1").innerHTML = "enter your email";
    } else {
        document.getElementById("error1").innerHTML = "";
    }
     if (username == "") {
        document.getElementById("error2").innerHTML = "enter your username";
    } else {
        document.getElementById("error2").innerHTML = "";
    }
    if (createpassword == "") {
        document.getElementById("error3").innerHTML = "enter your password";
    } else {
        document.getElementById("error3").innerHTML = "";
    }
    if (confirmpassword == "") {
        document.getElementById("error4").innerHTML = "re-enter your password";
    }
    else if(createpassword!=confirmpassword){
        document.getElementById("error5").innerHTML="incorrect password";
    }else{
        document.getElementById("error5").innerHTML = "";
    }

    const values={
        'fname':fname,
        'username':username,
        'email':email,
        'createpassword':createpassword,
        'confirmpassword':confirmpassword
    }
    console.log(values);
    localStorage.setItem('formValues',JSON.stringify(values));
}