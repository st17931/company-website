let li = document.getElementsByClassName('loginOrUserName')[0];

window.addEventListener("load", () => {
    console.log("hi form domContentLoaded")
    let url = "http://localhost:5000/teacher/getDetail"
    if(localStorage.getItem('softetUserDetail')){

        console.log("Inside if",localStorage.getItem('softetSolutions'))

        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${localStorage.getItem('softetUserDetail')}` 
            },
            method: "GET"
        }).then((data)=> data.json())
        .then((data)=> {
            console.log("data from api is", data);
            if(data.error == "Invalid token"){      
                li.textContent = "Log In";
                localStorage.removeItem("softetUserDetail")
            }else{
                li.innerHTML = `<select name="userProfile" id="userProfile">
                 <option  value="userDashboard" > ${data.name}</option>
                 <option  value="userDashboard" > Dashboard</option>
                  <option value="userLogout"> LogOut</option>
                </select>
                `;
                li.style.userSelect = "none"
                document.getElementById("userProfile").addEventListener('change', (e)=>{
                    if(e.target.value == "userDashboard"){
                        location.href = './dashBoard/dashBoard.html'
                    }if(e.target.value == "userLogout"){
                        localStorage.removeItem('softetUserDetail');
                        window.location.reload();
                    }
                    console.log("target is",e.target.value)
                })
            }

        });
    }
    console.log("By form domContentLoaded")  
    
   
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



