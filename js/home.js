const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

noBtn.addEventListener("mouseover", () => {
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
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387"); // Âm thanh Giáng sinh

    // Phát âm thanh khi nút "Yes" được nhấn
    audio.play();
    setTimeout(() => {
        window.location.href = "noel.html";
    }, 1000);
});
