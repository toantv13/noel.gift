const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

noBtn.addEventListener("click", () => {
  playButton();
  // Lấy kích thước của button
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const x = Math.random() * (window.innerWidth - btnWidth);
  const y = Math.random() * (window.innerHeight - btnHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  playButton();
  setTimeout(() => {
    window.location.href = "noel.html";
  }, 500);
});
