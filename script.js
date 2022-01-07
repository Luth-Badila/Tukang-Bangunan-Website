let menu = document.querySelector("#menu-btn");
let navbarLinks = document.querySelector(".header .navbar .links");
let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".gallery .image-container .image");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbarLinks.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbarLinks.classList.remove("active");

    if (window.scrollY > 60) {
        document.querySelector(".header .navbar").classList.add("active");
    } else {
        document.querySelector(".header .navbar").classList.remove("active");
    }
};

searchBox.oninput = () => {
    images.forEach((hide) => (hide.style.display = "none"));
    let value = searchBox.value;
    images.forEach((filter) => {
        let title = filter.getAttribute("data-title");
        if (value == title) {
            filter.style.display = "block";
        }
        if (searchBox.value == "") {
            filter.style.display = "block";
        }
    });
};