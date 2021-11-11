const menu = document.querySelector(".menu");
const menuLinks = document.querySelector(".menu-links");
const links = document.querySelectorAll(".menu-links li");
const title = document.querySelectorAll(".nav h1");

menu.addEventListener("click", () => {
    menuLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});

window.onscroll = function() {removeWelcome()};

function removeWelcome() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    title.classList.toggle("appear");

  } else {
    //document.getElementById("myP").className = "";
  }
}