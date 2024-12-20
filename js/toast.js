let currentSound;

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");

  // Tạo một phần tử toast
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Đặt màu dựa trên loại thông báo
  if (type === "success") {
    toast.style.backgroundColor = "#4CAF50";
    playCongratulation();
  } else if (type === "error") {
    toast.style.backgroundColor = "#F44336";
    playFalse();
  } else if (type === "warning") {
    toast.style.backgroundColor = "#FFC107";
    playFalse();
  }

  toast.textContent = message;

  // Thêm toast vào container
  container.appendChild(toast);

  // Tự động xóa sau 3 giây
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function playCongratulation() {
  // Nếu có âm thanh đang phát, dừng nó
  if (currentSound) {
    currentSound.pause();
  }
  const giftSound = new Audio("noel.gift/assets/votay.mp3");
  giftSound.currentTime = 0;
  giftSound.play();
  currentSound = giftSound;
}

function playFalse() {
  // Nếu có âm thanh đang phát, dừng nó
  if (currentSound) {
    currentSound.pause();
  }
  const giftSound = new Audio("noel.gift/assets/false.mp3");
  giftSound.currentTime = 0;
  giftSound.play();
  currentSound = giftSound;
}
