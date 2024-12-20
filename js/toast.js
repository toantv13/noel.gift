function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");

  // Tạo một phần tử toast
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Đặt màu dựa trên loại thông báo
  if (type === "success") toast.style.backgroundColor = "#4CAF50";
  else if (type === "error") toast.style.backgroundColor = "#F44336";
  else if (type === "warning") toast.style.backgroundColor = "#FFC107";

  toast.textContent = message;

  // Thêm toast vào container
  container.appendChild(toast);

  // Tự động xóa sau 3 giây
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
