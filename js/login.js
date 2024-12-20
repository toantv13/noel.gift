const host = window.location.host;
const pathHost = host.includes("127") ? "" : "/noel.gift/";
const audio = new Audio(`${pathHost}assets/button.mp3`); // Âm thanh Giáng sinh

function playButton() {
  const audio = new Audio(`${pathHost}assets/button.mp3`); // Âm thanh Giáng sinh
  audio.currentTime = 0;
  audio.play();
}

document.getElementById("login-btn").addEventListener("click", function () {
  // Phát âm thanh khi nút "Yes" được nhấn
  playButton();
  let inputValue = document.getElementById("password");
  const password = inputValue.value;
  const key = "2024-11-21"; // Định dạng mật khẩu
  if (password === key) {
    inputValue.classList.remove("input-error"); // Xóa class lỗi
    inputValue.classList.remove("shake"); // Xóa hiệu ứng rung
    window.location.href = "home.html";
  } else {
    inputValue.classList.add("input-error"); // Thêm class lỗi để đổi màu input
    inputValue.classList.add("shake"); // Thêm hiệu ứng rung
    showToast("Mật khẩu không đúng! Bé thử lại nha 😁", "error");
    // Xóa hiệu ứng rung sau 1s
    setTimeout(() => {
      inputValue.classList.remove("shake"); // Xóa hiệu ứng rung
    }, 1000); // 1000ms = 1s
  }
});
