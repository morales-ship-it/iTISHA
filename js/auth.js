document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("login-tab");
  const registerTab = document.getElementById("register-tab");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const forgotLink = document.getElementById("forgot-link");

  function showLogin() {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    // Slide transition
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginForm.classList.add("slide-in-left");
    setTimeout(() => loginForm.classList.remove("slide-in-left"), 400);
  }

  function showRegister() {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    // Slide transition
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    registerForm.classList.add("slide-in-right");
    setTimeout(() => registerForm.classList.remove("slide-in-right"), 400);
  }

  loginTab.addEventListener("click", showLogin);
  registerTab.addEventListener("click", showRegister);

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login logic goes here.");
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Register logic goes here.");
  });

  // ✅ Forgot password handler
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Password recovery flow coming soon.");
  });

  // ✅ Auto-switch based on query parameter
  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab");
  if (tab === "register") {
    showRegister();
  } else {
    showLogin();
  }
});