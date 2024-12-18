const gifts = document.querySelectorAll(".gift");
let selectedGifts = [];
const maxSelection = 2;

// Hiển thị thông tin món quà
function showGiftInfo(id) {
  const giftData = {
    1: { name: "Gấu bông", image: "assets/gift1.jpg" },
    2: { name: "Bánh Noel", image: "assets/gift2.jpg" },
    3: { name: "Đồng hồ", image: "assets/gift3.jpg" },
    4: { name: "Áo len", image: "assets/gift4.jpg" },
    5: { name: "Đèn trang trí", image: "assets/gift5.jpg" },
  };

  const gift = giftData[id];
  const giftInfo = document.createElement("div");
  giftInfo.classList.add("gift-info");
  giftInfo.innerHTML = `
        <h2>${gift.name}</h2>
        <img src="${gift.image}" alt="${gift.name}" style="width: 100%; border-radius: 10px;">
        <p>Chúc mừng! Bạn đã chọn món quà này!</p>
    `;
  document.body.appendChild(giftInfo);

  setTimeout(() => {
    document.body.removeChild(giftInfo);
  }, 3000);
}

// Chọn quà và kiểm tra logic
gifts.forEach((gift) => {
  gift.addEventListener("click", function () {
    const giftId = this.dataset.id;

    // Đã chọn đủ quà
    if (selectedGifts.length >= maxSelection) {
      alert("Bạn đã chọn đủ 2 món quà! Không thể chọn thêm.");
      return;
    }

    // Kiểm tra đã chọn quà này chưa
    if (selectedGifts.includes(giftId)) {
      alert("Bạn đã chọn món quà này rồi!");
      return;
    }

    // Đánh dấu quà
    this.classList.add("opened");
    selectedGifts.push(giftId);
    showGiftInfo(giftId);

    // Khi đã chọn đủ 2 món quà
    // Khi đã chọn đủ 2 món quà
    if (selectedGifts.length === maxSelection) {
      // Hiệu ứng rung ring và đổi màu cho các hộp quà đã chọn
      selectedGifts.forEach((id) => {
        const selectedGift = document.querySelector(`.gift[data-id="${id}"]`);
        selectedGift.classList.add("selected");
      });

      // Vô hiệu hóa các hộp quà còn lại
      gifts.forEach((g) => {
        if (!g.classList.contains("opened")) {
          g.style.pointerEvents = "none"; // Không thể bấm
          g.style.opacity = "0.5"; // Làm mờ hộp chưa chọn
        }
      });

      // Thông báo sau khi chọn xong
      setTimeout(() => {
        alert("Bạn đã chọn xong 2 món quà!");
        saveGifts(selectedGifts); // Lưu thông tin quà
      }, 1500); // Chờ hiệu ứng hoàn tất trước khi thông báo
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

// Hoán đổi vị trí các hộp quà
function shuffleGifts() {
  const container = document.querySelector(".gifts");
  const shuffledGifts = Array.from(gifts).sort(() => Math.random() - 0.5);
  shuffledGifts.forEach((gift) => container.appendChild(gift));
}

shuffleGifts();
