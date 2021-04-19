/* 
-----------------
Main js 
-----------------
*/

var navIcon = document.querySelector(".nav-icon");
var menu = document.querySelector(".menu");

navIcon.addEventListener("click",function(){
    menu.classList.toggle("active");
})