document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("formTitle");
    const authForm = document.getElementById("authForm");
    const toggleForm = document.getElementById("toggleForm");
    const nameField = document.getElementById("nameField");
    const submitBtn = document.querySelector(".btn");

    let isSignup = false;

    toggleForm.addEventListener("click", function () {
        isSignup = !isSignup;
        formTitle.innerText = isSignup ? "Sign Up" : "Login";
        nameField.style.display = isSignup ? "block" : "none";
        submitBtn.innerText = isSignup ? "Sign Up" : "Login";
        toggleForm.innerHTML = isSignup 
            ? 'Already have an account? <span>Login</span>' 
            : "Don't have an account? <span>Sign Up</span>";
    });

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert(isSignup ? "Account Created!" : "Logged In!");
    });
});
