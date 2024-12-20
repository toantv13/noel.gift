const host = window.location.host;
const pathHost = host.includes("127") ? "" : "/noel.gift/";
const audio = new Audio(`${pathHost}assets/button.mp3`); // Âm thanh Giáng sinh
let currentQuestion = null;
let previousQuestionIndex = null; // Lưu chỉ số câu hỏi vừa hiển thị

const questions = [
  { question: "Bé nhập ngày chúng ta bắt đầu gặp nhau?", key: "2024-11-21", type: "date" },
  { question: "Mật khẩu điện thoại của anh?", key: "726863", type: "number" },
  { question: "Số điện thoại của anh?", key: "0866910323", type: "text" },
  { question: "Ngày tháng năm sinh của bé?", key: "2004-10-27", type: "date" },
];
function playButton() {
  const audio = new Audio(`${pathHost}assets/button.mp3`); // Âm thanh Giáng sinh
  audio.currentTime = 0;
  audio.play();
}

// Hàm random câu hỏi không trùng câu trước
function randomQuestion() {
    let randomIndex;
    
    // Lặp cho đến khi tìm được chỉ số khác với câu hỏi trước đó
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (randomIndex === previousQuestionIndex);
  
    previousQuestionIndex = randomIndex; // Cập nhật chỉ số của câu hỏi hiện tại
    currentQuestion = questions[randomIndex];
  
    const questionLabel = document.getElementById("question-label");
    const passwordInput = document.getElementById("password");
  
    questionLabel.textContent = currentQuestion.question; // Hiển thị câu hỏi
    passwordInput.type = currentQuestion.type; // Đặt kiểu input (date, text, number)
    passwordInput.value = ""; // Xóa input cũ
  }

// Khi trang tải, hiển thị câu hỏi ngẫu nhiên
window.onload = () => {
  randomQuestion();
};

document.getElementById("login-btn").addEventListener("click", function () {
  // Phát âm thanh khi nút "Yes" được nhấn
  playButton();
  let inputValue = document.getElementById("password");
  const password = inputValue.value;
//   const key = "2024-11-21"; // Định dạng mật khẩu
  if (password === currentQuestion.key) {
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
    randomQuestion(); // Hiển thị câu hỏi ngẫu nhiên khác
  }
});
