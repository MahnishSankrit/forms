document.addEventListener("DOMContentLoaded", function () {
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const loginForm = document.querySelector(".login");
    const signupForm = document.querySelector(".signup");

    if (showSignup && showLogin && loginForm && signupForm) {
        showSignup.addEventListener("click", function (event) {
            event.preventDefault();
            loginForm.classList.add("hidden");
            signupForm.classList.remove("hidden");
        });

        showLogin.addEventListener("click", function (event) {
            event.preventDefault();
            signupForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
        });
    } else {
        console.error("One or more elements not found in DOM.");
    }
});
