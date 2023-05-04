// -------About Page--------
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

// Remove class active-x on click to remove content on page
function openTab(tabName) {
  for(tabLink of tabLinks) {
    tabLink.classList.remove("active-link")
  }
  for(tabContent of tabContents) {
    tabContent.classList.remove("active-tab")
  }
  // Adding content back to the page on click
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabName).classList.add("active-tab")
}

// -------- Responsive ---------

var sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

// // Mobile card transitions
// window.onload = main;
// function main() {
//     window.addEventListener("scroll", function(){
//         if(isElementIntoView("about-card")) openTab();
//     });
// }
//
// function isElementIntoView(el) { 
//     var e = document.querySelector(el);
//     var rect = e.getBoundingClientRect();
//     return  window.innerHeight-rect.top >= 0; 
// }

// --------Google sheets integration--------
// https://github.com/jamiewilson/form-to-google-sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwI1n-Ssrx2gyrGtmA4pZNqgRMZMG_b1yZfJDVOYnHDg0BLqMnJ0MF4FKnRV_bUdwTK/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
