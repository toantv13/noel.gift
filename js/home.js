const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    alert("Cảm ơn em! Anh rất vui!! ❤️");
    setTimeout(() => {
        window.location.href = "noel.html";
    }, 3000);
});
