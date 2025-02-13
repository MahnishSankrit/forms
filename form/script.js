document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.querySelector(".login");
    const signupBox = document.querySelector(".signup");
    const formContainer = document.querySelector(".form-container");

    document.getElementById("showSignup").addEventListener("click", function () {
        gsap.to(formContainer, { x: -350, duration: 0.5, ease: "power2.inOut" });
    });

    document.getElementById("showLogin").addEventListener("click", function () {
        gsap.to(formContainer, { x: 0, duration: 0.5, ease: "power2.inOut" });
    });

    // Form Submission Alert (for demo)
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Logged In!");
    });

    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Account Created!");
    });
});
