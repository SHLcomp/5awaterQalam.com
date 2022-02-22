const burg = document.querySelector(".burg");
const navMenu = document.querySelector(".nav-menu");

burg.addEventListener("click", () => {
    burg.classList.toggle("active");
    navMenu.classList.toggle("active");
})
//* nhghjbyuj *//
document.querySelectorAll(".a").forEach(n => n. addEventListener("click" , () => {
        burg.classList.remove("active");
        navMenu.classList.remove("active");
    }))
