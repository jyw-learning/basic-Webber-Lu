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
    }, 500); // 延遲隱藏，讓淡出有時間跑
    card.style.display = "block";
  } else {
    card.style.display = "none";
    catGallery.style.display = "flex";

    // 等畫面顯示後再加 show class，動畫才會觸發
    requestAnimationFrame(() => {
      catGallery.classList.add("show");
    });
  }
}
