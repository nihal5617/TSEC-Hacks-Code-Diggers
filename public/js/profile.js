const btns = [document.querySelector('#above'), document.querySelector('#experience'), document.querySelector('#projects'), document.querySelector('#contact')];
const btnDisplay = [document.querySelector('#above-contain'), document.querySelector('#experience-contain'), document.querySelector('#projects-contain'), document.querySelector('#contact-contain')];
console.log(btnDisplay)
console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btnDisplay.forEach((open) => {
            // console.log(e.target.className)
            // console.log(open.classList.contains(e.target.className))
            // let x = e.target.classList[4]
            // console.log(x)
            if (open.classList.contains(e.target.className)){
                open.style = "display: block;"
            }
            else {
                open.style = "display: none;"
            }
        })
    })
})