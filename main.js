function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  var icon = document.querySelector("#icon");
  dropdown.classList.toggle("show");
  icon.classList.toggle("bx-heart");
  event.stopPropagation();
}
