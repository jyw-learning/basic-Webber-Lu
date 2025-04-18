function showMore() {
  alert("更多！");
}

function toggleCat() {
  const card = document.getElementById("profileCard");
  const catGallery = document.getElementById("catGallery");

  const isCatVisible = catGallery.classList.contains("show");

  if (isCatVisible) {
    catGallery.classList.remove("show");
    setTimeout(() => {
      catGallery.style.display = "none";
    }, 300); // 稍微延遲，讓動畫先結束
    card.style.display = "block";
  } else {
    card.style.display = "none";
    catGallery.style.display = "flex";
    // 確保 display 設定好後再加 class
    setTimeout(() => {
      catGallery.classList.add("show");
    }, 10);
  }
}
