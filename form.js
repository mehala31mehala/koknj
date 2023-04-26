function validate(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const num = document.getElementById("num").value;


    if (name == "") {
        document.getElementById("error5").innerHTML = "enter your name";
    } else {
        document.getElementById("error5").innerHTML = "";
    }
    if (num == "") {
        document.getElementById("error").innerHTML = "this field is required ";
    }else if(num.length<10||num.length>10){
        document.getElementById("error").innerHTML = "enter valid mobile number";

    }else{
        document.getElementById("error").innerHTML = "";

    }
    if (email == "") {
        document.getElementById("error1").innerHTML = "enter your email";
    }
     if (userName == "") {
        document.getElementById("error2").innerHTML = "enter your username";
    } else {
        document.getElementById("error2").innerHTML = "";
    }
    if (password == "") {
        document.getElementById("error3").innerHTML = "enter your password";
    } else {
        document.getElementById("error3").innerHTML = "";
    }
    if (address== "") {
        document.getElementById("error4").innerHTML = "enter your address";
    }else{
        document.getElementById("error4").innerHTML = "";
    }
  
    const values={
        'name':name,
        'userName':userName,
        'email':email,
        'password':password,
        'mobileNo':mobileNo
    }
    console.log(values);
    localStorage.setItem('formValues',JSON.stringify(values));
}