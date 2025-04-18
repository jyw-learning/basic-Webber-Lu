function showMore() {
  alert("更多！");
}

function toggleCat() {
  const card = document.getElementById("profileCard");
  const catGallery = document.getElementById("catGallery");
  const backButton = document.getElementById("backButton");

  const isCatVisible = catGallery.classList.contains("show");

  if (isCatVisible) {
    catGallery.classList.remove("show");
    backButton.style.display = "none";
    setTimeout(() => {
      catGallery.style.display = "none";
    }, 500);
    card.style.display = "block";
  } else {
    card.style.display = "none";
    catGallery.style.display = "flex";
    backButton.style.display = "block";

    requestAnimationFrame(() => {
      catGallery.classList.add("show");
    });
  }
}

function returnToCard() {
  const card = document.getElementById("profileCard");
  const catGallery = document.getElementById("catGallery");
  const backButton = document.getElementById("backButton");

  catGallery.classList.remove("show");
  backButton.style.display = "none";

  setTimeout(() => {
    catGallery.style.display = "none";
    card.style.display = "block";
  }, 500); // 與圖片淡出時間一致
}
