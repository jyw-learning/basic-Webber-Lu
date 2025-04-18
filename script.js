function showMore() {
  alert("更多！");
}

function toggleCat() {
  const card = document.getElementById("profileCard");
  const catGallery = document.getElementById("catGallery");

  const isCatVisible = catGallery.style.display === "block";

  card.style.display = isCatVisible ? "block" : "none";
  catGallery.style.display = isCatVisible ? "none" : "block";
}

function returnToCard() {
  document.getElementById("profileCard").style.display = "block";
  document.getElementById("catGallery").style.display = "none";
}