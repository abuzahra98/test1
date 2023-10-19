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
    // var about1 = document.querySelector("about__section");
    var newContent = document.querySelector(".new-content");
    var image = document.querySelector(".content-about_img");
    var ceo = document.querySelector(".about__section");
    var aaa = document.querySelector(".move__text");
    var ccc = document.querySelector(".content-about_section");
  
    window.addEventListener("scroll", function () {
      // Get the height of the header
      var headerHeight = header.offsetHeight;
      var about1Height = headerHeight + 500;
      var headerwedth = header.offsetWidth;

      // Get the current scroll position
      var scrollPosition = window.scrollY;
      var width = 900
      if (headerwedth < 800) {
        image.style.display = "none";
 
      }
      if (headerwedth < 900) {
        image.style.display = "none";
 
      } 
      if (scrollPosition > headerHeight ) {
         
        ceo.classList.add("about__sectionhover");
    }
    if (scrollPosition > about1Height ) { 
      aaa.classList.add("move__texthover");
  }
      //  if (headerwedth < 900) {
      //   aaa.style.display = "flex";
      //   ccc.style.display = "unset";
 
      // }
      // Show the new-content div when scrolled past the header
      if (scrollPosition > headerHeight&& headerwedth > width) {
        newContent.style.display = "flex";
        newContent.classList.add("onTop");
        
    } else {
        newContent.style.display = "none";
      }
    });
  });

