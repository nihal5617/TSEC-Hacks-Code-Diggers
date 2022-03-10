document.querySelector("#submit-button").addEventListener('click', async () => {
    const email = document.querySelector("#email").value;
    // console.log(email);
    const password = document.querySelector('#password').value;
    // console.log(password);
    
    if(password == "" || email == "") {
        return window.alert("Please Enter All Details");
    }

    const data = {
        email : email,
        password:password,
    }
    // console.log(data);

    // res = await axios({
    //     method: "POST",
    //     url: `http://localhost:5000/`,
    //     data : data,
    //     validateStatus: () => true,
    // })

    const res = 200;
    // console.log(data);
    // console.log(res.status);
    if(res == 200){
        // console.log('hello');
        // console.log(window.location.href);
        window.location.href = "http://localhost:5000/";
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