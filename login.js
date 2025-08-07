function togglePassword() {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type");
  passwordField.setAttribute("type", type === "password" ? "text" : "password");
}

// Dark Mode Toggle with localStorage
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light");

  // Save preference
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
}

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
};
function toggleSignupPassword() {
  const passwordField = document.getElementById("signup-password");
  const type = passwordField.getAttribute("type");
  passwordField.setAttribute("type", type === "password" ? "text" : "password");
}

// Fake signup validation and redirect
function handleSignup(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("signup-password").value;
  const agreed = document.getElementById("agree").checked;

  if (!username || !email || !password || !agreed) {
    alert("Please fill all fields and accept the terms.");
    return false;
  }

  // Simulate saving user info (optional)
  localStorage.setItem("spotifyUser", JSON.stringify({ username, email }));

  // Redirect after fake signup
  alert("Signup successful! Redirecting to Spotify home...");
  window.location.href = "index.html"; // Your Spotify homepage
  return false;
}
