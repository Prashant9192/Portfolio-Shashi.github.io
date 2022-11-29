
// Script for menu in nav bar 

const Menu = document.querySelector(".menu");
const navMenu = document.querySelector("#nav-menu ul");

Menu.addEventListener("click", ()=> {
    Menu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("#nav-menu a").forEach(n => n.addEventListener("click", ()=> {
    Menu.classList.remove("active");
    navMenu.classList.remove("active");
}))



// clear the form after submit

// function clearField() {
//     if(document.getElementById) {
//        document.messageBox.reset();
//     }
//  }
