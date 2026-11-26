const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

const loginView = document.getElementById("login-view");
const dashboardView = document.getElementById("dashboard-view");
const welcomeTitle = document.getElementById("welcome-title");
const logoutBtn = document.getElementById("logout-btn");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the page from refreshing on submit

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username) {
    errorMsg.textContent = "Please enter a username or email.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  errorMsg.textContent = "";
  welcomeTitle.textContent = `Welcome, ${username}!`;

  loginView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
});

logoutBtn.addEventListener("click", () => {
  passwordInput.value = "";
  dashboardView.classList.add("hidden");
  loginView.classList.remove("hidden");
});