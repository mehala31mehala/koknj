function validate(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "") {
        document.getElementById("error").innerHTML = "enter your username";
    } else {
        document.getElementById("error").innerHTML = "";
    }
    if (password == "") {
        document.getElementById("error1").innerHTML = "enter your username";
    } else {
        document.getElementById("error1").innerHTML = "";
    }
    const values={
        'username':username,
        'password':password
    }
    console.log(values);
    localStorage.setItem('formValues',JSON.stringify(values));

}
