document.querySelector("#submit-button").addEventListener('click', async () => {
    const about = document.querySelector("#about").value;
    // console.log(about);
    const experience = document.querySelector('#experience').value;
    // console.log(experience);
    const domain = document.querySelector('#domain').value;
    // console.log(domain);
    const projects = document.querySelector("#projects").value;
    // console.log(projects);
    const linkedin = document.querySelector("#linkedin").value;
    // console.log(linkedin);
    const github = document.querySelector("#github").value;
    // console.log(github);
    const resume = document.querySelector("#resume").value;
    // console.log(resume);
    
    if(about == "" || experience == "" || domain == "" || projects == "" || linkedin == "" || github == "") {
        return window.alert("Please Enter All Details");
    }

    // console.log(resume.files.length);
    // if(resume.files.length){
    //     return window.alert("No file selected");
    // }

    const check = document.querySelector('#terms').checked;
    console.log(check);
    if(check === false) {
        return window.alert("Please accept all the terms and conditions");
    }

    const data = {
        about,
        experience,
        domain,
        projects,
        linkedin,
        github,
        resume
    }

    const res = await axios({
        method: "POST",
        url: `http://localhost:5000/Login`,
        data : data,
        validateStatus: () => true,
    })

    // console.log(data);
    if(res.status == 200){
        // console.log('hello');
        // console.log(window.location.href);
        window.location.href = "http://localhost:5000/Login";
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