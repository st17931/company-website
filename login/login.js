function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function forLoopToChangeDisplay(collection, toggle){
    for(let i=0; i< collection.length; i++){
        collection[i].style.display = toggle
    }
}

let login = true
let url = `http://localhost:5000/auth/${ login ? "login" : "signup"}`

document.getElementsByClassName("loginText")[0].addEventListener("click",()=>{
    const signUpFields = document.getElementsByClassName("signUpField")
    forLoopToChangeDisplay(signUpFields, "none")
    document.getElementsByClassName("logSignButton")[0].value = "LOG IN";
    login = true;
})

document.getElementsByClassName("signupText")[0].addEventListener("click",()=>{
    const signUpFields = document.getElementsByClassName("signUpField")
    forLoopToChangeDisplay(signUpFields, "block")
    document.getElementsByClassName("logSignButton")[0].value = "SIGN UP";
    login = false;
})



// document.getElementById("loginSignUpForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("Password").value;
//     let role = document.getElementById("role").value;
    
//     try {
//         console.log("students details are",JSON.stringify({ name: name, email: email, password: password, role: role }));
//         fetch(url, {
//             headers: {
//                 "Content-Type": "application/json",
//               },
//             method: "POST",
//             body: JSON.stringify((login) ? {email: email, password: password} : { name: name, email: email, password: password, role: role })
//         }).then((data)=>{
            
            

//             return data.json()
//         }).then((data)=> {console.log(data)

//             if(data.error){
//                 alert("Invalid Credential")
//             }else{
//             localStorage.setItem("softetUserDetail",data.token);
//             window.location.href = '../index.html'
//         }
//         })
//     } catch (e) {
//         alert("Something went wrong")
//     }
// })