/*SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON */
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.5) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)
/*SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON SCROLL TO TOP BUTTON*/

/*MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL*/
var modal1 = document.getElementById('login-modal');
var modal2 = document.getElementById('signup-modal');
var loginbtn = document.getElementById('loginbtn');
var signupbtn = document.getElementById('signupbtn');
var cancelbtn1 = document.getElementById('cancelbtn1');
var cancelbtn2 = document.getElementById('cancelbtn2');

loginbtn.onclick = () => {
  modal1.style.transitionDuration = ".3s";
  modal1.style.visibility = "visible"
  modal1.style.opacity = "1"
}

signupbtn.onclick = () => {
  modal2.style.transitionDuration = ".3s";
  modal2.style.visibility = "visible";
  modal2.style.opacity = "1";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal1 || event.target === modal2 || event.target === cancelbtn1 || event.target === cancelbtn2) {
    modal1.style.transitionDuration = ".15s";
    modal2.style.transitionDuration = ".15s";
    modal1.style.visibility = "hidden";
    modal1.style.opacity = "0";
    modal2.style.visibility = "hidden";
    modal2.style.opacity = "0";
  }
}


