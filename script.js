function searchFlower() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let flowers = document.getElementsByClassName("flower-card");

  for (let i = 0; i < flowers.length; i++) {
    let flowerName = flowers[i].innerText.toLowerCase();
    if (flowerName.includes(input)) {
      flowers[i].style.display = "block";
    } else {
      flowers[i].style.display = "none";
    }
  }
}
