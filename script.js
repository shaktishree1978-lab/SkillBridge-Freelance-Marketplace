// SkillBridge - Freelance Marketplace
// JavaScript by Member 3

document.addEventListener("DOMContentLoaded", function () {

    // Getting HTML elements
    const searchBox = document.getElementById("searchBox");
    const category = document.getElementById("category");
    const serviceCards = document.querySelectorAll(".service-card");

    // Search services
    if (searchBox) {
        searchBox.addEventListener("input", function () {

            let searchValue = searchBox.value.toLowerCase();

            serviceCards.forEach(function (card) {

                let serviceName = card.querySelector("h3")
                    .textContent.toLowerCase();

                let description = card.querySelector("p")
                    .textContent.toLowerCase();

                if (serviceName.includes(searchValue) ||
                    description.includes(searchValue)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";
                }
            });

        });
    }

    // Filter services by category
    if (category) {
        category.addEventListener("change", function () {

            let selectedCategory = category.value;

            serviceCards.forEach(function (card) {

                let cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" ||
                    selectedCategory === cardCategory) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";
                }

            });

        });
    }

    // Add services to favourites
    let favouriteButtons = document.querySelectorAll(".favourite-btn");

    favouriteButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.innerText === "♡ Favourite") {

                button.innerText = "♥ Favourited";
                button.style.color = "red";

            } else {

                button.innerText = "♡ Favourite";
                button.style.color = "";
            }

        });

    });

    // Sort services according to price
    const sortBox = document.getElementById("sortPrice");

    if (sortBox) {

        sortBox.addEventListener("change", function () {

            let container = document.getElementById("serviceList");

            let cards = Array.from(
                container.querySelectorAll(".service-card")
            );

            if (sortBox.value === "low") {

                cards.sort(function (a, b) {
                    return Number(a.dataset.price) -
                           Number(b.dataset.price);
                });

            } else if (sortBox.value === "high") {

                cards.sort(function (a, b) {
                    return Number(b.dataset.price) -
                           Number(a.dataset.price);
                });

            }

            cards.forEach(function (card) {
                container.appendChild(card);
            });

        });

    }

    // Mobile menu
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

    }

    // Contact freelancer
    const contactButtons = document.querySelectorAll(".contact-btn");

    contactButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Thank you! Contact feature will be available soon.");

        });

    });

    // Login form
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email === "" || password === "") {

                alert("Please fill all the details.");

            } else if (password.length < 6) {

                alert("Password must be at least 6 characters.");

            } else {

                alert("Login form submitted successfully!");

            }

        });

    }

    // Signup form
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("signupEmail").value;
            let password = document.getElementById("signupPassword").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            if (name === "" || email === "" ||
                password === "" || confirmPassword === "") {

                alert("Please fill all the details.");

            } else if (password.length < 8) {

                alert("Password must contain at least 8 characters.");

            } else if (password !== confirmPassword) {

                alert("Passwords do not match.");

            } else {

                alert("Registration successful!");

            }

        });

    }

    console.log("SkillBridge website is ready!");

}); 
