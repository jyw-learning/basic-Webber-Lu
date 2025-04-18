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
    }, 300);
    card.style.display = "block";
  } else {
    card.style.display = "none";
    catGallery.style.display = "flex";

    // ✅ 等畫面更新完再加 .show，確保 transition 生效
    requestAnimationFrame(() => {
      catGallery.classList.add("show");
    });
  }
}
