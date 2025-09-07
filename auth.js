// Switch between Sign Up and Login forms
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
document.getElementById('showLogin').addEventListener('click', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});
document.getElementById('showSignUp').addEventListener('click', () => {
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});

// Sign Up
document.getElementById('signupBtn').addEventListener('click', () => {
  const name = document.getElementById('signupName').value.trim();
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  if(!name || !username || !email || !password){
    return alert("All fields are required!");
  }

  // Save user info in localStorage
  const user = { name, username, email, password };
  localStorage.setItem('mavtinxUser', JSON.stringify(user));

  alert("Account created successfully!");
  window.location.href = "dashboard.html"; // Redirect to dashboard
});

// Login
document.getElementById('loginBtn').addEventListener('click', () => {
  const loginInput = document.getElementById('loginUsername').value.trim();
  const loginPassword = document.getElementById('loginPassword').value.trim();

  const userData = JSON.parse(localStorage.getItem('mavtinxUser'));
  if(!userData){
    return alert("No account found. Please sign up first.");
  }

  if((loginInput === userData.username || loginInput === userData.email) && loginPassword === userData.password){
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    alert("Incorrect username/email or password!");
  }
});
