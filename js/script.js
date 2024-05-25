
window.addEventListener("load" , () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // Page Loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    },600);
});

// Toggle Navbar 
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

// Active Section

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== "") {
        // Activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide")
        if(e.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");

        }, 500);
    }
});


// About Tabs

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// Portfolio Item Details Popup 

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();   
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
});

// hide popup when clicking outside of it

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// Listen For Send Message
// document.querySelector(".contact-form").addEventListener("submit", sendEmail);

// function sendEmail() {
//     Email.send({
//         Host : "smtp.yourisp.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
const form =  document.querySelector("form");
const fullNane = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = 'fullNane: ${fullNane.value}<br> Email: ${email.value}<br>Subject: ${subject.value}<br> Message: ${mess.value}';
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "harryraj6388@gmail.com",
    Password : "1B49E3EB6E3A13459B22C6136A1CE94518C8",
    To : 'harryraj6388@gmail.com',
    From : "harryraj6388@gmail.com",
    Subject : document.getElementById("subject").value,
    Body :"Name: " + document.getElementById("name").value
      + "<br> email: " + document.getElementById("email").value
      + "<br> Subject: " + document.getElementById("subject").value
      + "<br> Message: " + document.getElementById("message").value
}).then(function(message) {
    alert("Message Sent Successfully!!");
    document.getElementById("contact-form").reset(); // Reset the form after successful submission
  });
}