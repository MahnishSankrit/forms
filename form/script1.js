const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const formContainer = document.querySelector(".form-container");
const loginForm = document.querySelector(".form-box.login");
const signupForm = document.querySelector(".form-box.signup");

// Ensure signup form starts hidden but positioned off-screen
gsap.set(signupForm, { x: "100%", opacity: 0, display: "none" });

signupBtn.addEventListener("click", () => {
    gsap.to(loginForm, { x: "-100%", duration: 0.6, ease: "power2.inOut", onComplete: () => {
        gsap.set(loginForm, { display: "none" });  // Hide login after transition
    }});
    gsap.set(signupForm, { display: "block" });  // Ensure it's visible
    gsap.to(signupForm, { x: "0%", opacity: 1, duration: 0.6, ease: "power2.inOut" });
});

loginBtn.addEventListener("click", () => {
    gsap.to(signupForm, { x: "100%", opacity: 0, duration: 0.6, ease: "power2.inOut", onComplete: () => {
        gsap.set(signupForm, { display: "none" });
    }});
    gsap.set(loginForm, { display: "block" });
    gsap.to(loginForm, { x: "0%", opacity: 1, duration: 0.6, ease: "power2.inOut" });
});
