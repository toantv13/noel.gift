document.getElementById("login-btn").addEventListener("click", function () {
    const password = document.getElementById("password").value;
    const key = "2004-10-27"; // Định dạng mật khẩu
    if (password === key) {
        window.location.href = "home.html";
    } else {
        document.getElementById("error-msg").textContent = "Mật khẩu không đúng! Vui lòng thử lại.";
    }
});
