const menuBar = document.querySelector('.menu-bar');
const sideBar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const lis = document.querySelectorAll('.list li');
 
 
menuBar.addEventListener('click',() =>{
    sideBar.classList.add('open')
    overlay.classList.add('open')
})

overlay.addEventListener('click',()=>{
    sideBar.classList.remove('open')
    overlay.classList.remove('open')
})

lis.forEach(li =>{
    li.addEventListener('click',() =>{
        sideBar.classList.remove('open')
        overlay.classList.remove('open')
    })
})
 
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");
    var newContent = document.querySelector(".new-content");
    var image = document.querySelector(".content-about_img");
  
    window.addEventListener("scroll", function () {
      // Get the height of the header
      var headerHeight = header.offsetHeight;
      var headerwedth = header.offsetWidth;

      // Get the current scroll position
      var scrollPosition = window.scrollY;
      var width = 900
      if (headerwedth < 800) {
        image.style.display = "none";
 
      }
      // Show the new-content div when scrolled past the header
      if (scrollPosition > headerHeight&& headerwedth > width) {
        newContent.style.display = "flex";
        newContent.classList.add("onTop");
        
    } else {
        newContent.style.display = "none";
      }
    });
  });