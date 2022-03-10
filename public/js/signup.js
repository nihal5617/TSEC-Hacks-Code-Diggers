document.querySelector("#submit-button").addEventListener('click', async () => {
    const email = document.querySelector("#email").value;
    // console.log(email);
    const password = document.querySelector('#password').value;
    // console.log(password);
    const confirmPassword = document.querySelector('#confirm-password').value;
    // console.log(confirmPassword);
    const fname = document.querySelector("#fname").value;
    // console.log(fname);
    const lname = document.querySelector("#lname").value;
    // console.log(lname);
    
    if(password == "" || email == "" || confirmPassword == "" || fname == "" || lname == "") {
        return window.alert("Please Enter All Details");
    }

    if(password != document.querySelector("#confirm-password").value ){
        document.querySelector("#confirm-password").value = "";
        document.querySelector("#password").value = "";
        return window.alert("Passwords do not match");
    }

    const check = document.querySelector('#terms').checked;
    // console.log(check);
    if(check === false) {
        return window.alert("Please accept all the terms and conditions");
    }
    // console.log("im here");
    const data = {
        email : email,
        password:password,
        fname : fname,
        lname : lname,
    }
    // console.log(data);
    const res = await axios({
        method: "POST",
        url: `http://localhost:5000/SignUp-2`,
        data : data,
        validateStatus: () => true,
    })

    // const res = 200;
    // console.log(data);
    // console.log(res.status);
    console.log(res);
    if(res.status == 200){
        // console.log('hello');
        // console.log(window.location.href);
        window.location.href = "http://localhost:5000/SignUp-2";
        window.alert("Registration Succesful");
    }
    else if (res.status == 409){
        return window.alert("Email already exists")
    }
    else{
        window.alert("Registration Failed");
        window.location.reload();
    }
})  