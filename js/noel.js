const gifts = document.querySelectorAll(".gift");
let selectedGifts = [];
const maxSelection = 2;

const giftData = {
  1: { name: "Gấu bông", image: "assets/gift1.jpg" },
  2: { name: "Chúc bé may mắn lần sau", image: "assets/gift2.jpg" },
  3: { name: "Nhẫn", image: "assets/gift3.jpg" },
  4: { name: "Vòng tay", image: "assets/gift4.jpg" },
  5: { name: "1 điều ước", image: "assets/gift5.jpg" },
};

// Hoán đổi vị trí các hộp quà
function shuffleGifts() {
  const container = document.querySelector(".gifts");
  const shuffledGifts = Array.from(gifts).sort(() => Math.random() - 0.5);
  shuffledGifts.forEach((gift) => container.appendChild(gift));
}

shuffleGifts();

// Hiển thị thông tin món quà
function showGiftInfo(id) {
  const gift = giftData[id];
  showToast(`Bạn đã chọn món quà: ${gift.name}`, "success");
}

// Chọn quà và kiểm tra logic
gifts.forEach((gift) => {
  gift.addEventListener("click", function () {
    const giftId = this.dataset.id;

    // Đã chọn đủ quà
    if (selectedGifts.length >= maxSelection) {
      // alert("Bạn đã chọn đủ 2 món quà! Không thể chọn thêm.");
      showToast(
        "Bé iu đã chọn đủ 2 món quà! Không thể chọn thêm.\r\n😏😏😏😁",
        "warning"
      );
      return;
    }

    // Kiểm tra đã chọn quà này chưa
    if (selectedGifts.includes(giftId)) {
      showToast(
        "Bé iu đã chọn món quà này rồi. Bé chọn món quà khác!",
        "warning"
      );
      return;
    }

    // Đánh dấu quà
    this.classList.add("opened");
    this.textContent = giftData[giftId].name; // Thay thế tên quà
    selectedGifts.push(giftId);
    showGiftInfo(giftId);
    const selectedGift = document.querySelector(`.gift[data-id="${giftId}"]`);
    selectedGift.classList.add("selected");

    // Khi đã chọn đủ 2 món quà
    if (selectedGifts.length === maxSelection) {
      // Thông báo sau khi chọn xong
      showToast(
        "Bé iu chọn xong quà rồi chụp gửi anh nha \r\n🥰🥰🥰",
        "success"
      );
    }
  });
});

// Lưu quà vào file text
function saveGifts(selectedGifts) {
  const giftDetails = selectedGifts
    .map((id) => {
      return `Món quà ${id}`;
    })
    .join(", ");

  // Tạo file text trong folder "data" (khi sử dụng backend)
  const blob = new Blob([`Selected Gifts: ${giftDetails}`], {
    type: "text/plain",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "selected_gifts.txt";
  link.click();

  alert("Thông tin quà đã được lưu!");
}

// Khi load trang Noel
if (window.location.pathname.includes("noel.html")) {
  const lastPage = localStorage.getItem("lastPage");

  // Nếu reload trang Noel, chuyển hướng về Login
  if (lastPage === "noel") {
    localStorage.setItem("lastPage", "login"); // Đặt lại trạng thái
    window.location.href = "/index.html"; // Đường dẫn Login Page
  } else {
    localStorage.setItem("lastPage", "noel"); // Lưu trạng thái Noel
  }
}

// Khi ở trang Login
if (window.location.pathname.includes("index.html")) {
  localStorage.setItem("lastPage", "login"); // Đặt trạng thái là Login
}
