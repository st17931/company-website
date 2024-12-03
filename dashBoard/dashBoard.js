function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}


let url = "http://localhost:5000/teacher/getDetail"
fetch(url,{
    headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${localStorage.getItem('softetUserDetail')}`
    },
    method: "GET"
}).then(data => data.json()).then((data)=>{
    document.getElementById('userName').textContent = data.name;
    console.log("data for dashboard", data)
})