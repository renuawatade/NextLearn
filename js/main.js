document.addEventListener("DOMContentLoaded", () => {
  const orgBtn = document.getElementById("org-login-btn");
  const studentBtn = document.getElementById("student-login-btn");

  orgBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html?role=organization";
  });

  studentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "login.html?role=student";
  });
});
