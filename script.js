const rainContainer = document.getElementById("rain-container");

// 產生水花擴散效果
function createSplash(x, y) {
    const splash = document.createElement("div");
    splash.classList.add("splash");
    splash.style.left = `${x}px`;
    splash.style.top = `${y}px`;
    rainContainer.appendChild(splash);

    // 移除水花元素
    setTimeout(() => {
        splash.remove();
    }, 500); // 動畫 0.5 秒
}

// 建立雨滴
function createRaindrop() {
    const raindrop = document.createElement("div");
    raindrop.classList.add("rain-drop");

    // 隨機位置、大小與速度
    const startX = Math.random() * window.innerWidth;
    const height = Math.random() * 20 + 10;
    const width = Math.random() * 1.5 + 1;
    const duration = Math.random() * 1.5 + 1; // 1~2.5 秒

    raindrop.style.left = `${startX}px`;
    raindrop.style.height = `${height}px`;
    raindrop.style.width = `${width}px`;
    raindrop.style.animationDuration = `${duration}s`;

    rainContainer.appendChild(raindrop);

    // 結束時移除並產生水花
    setTimeout(() => {
        const dropX = raindrop.offsetLeft;
        const dropY = window.innerHeight - 5; // 接近底部
        createSplash(dropX, dropY);
        raindrop.remove();
    }, duration * 1000);
}

function showMore() {
    alert("更多！");
}

let rainInterval = null; // 預設不會下雨

function toggleRain(checkbox) {
  const label = document.getElementById("toggleLabel");

  if (checkbox.checked) {
    rainInterval = setInterval(createRaindrop, 100);
    label.textContent = "☔";
  } else {
    clearInterval(rainInterval);
    rainInterval = null;
    label.textContent = "☀️";
  }
}