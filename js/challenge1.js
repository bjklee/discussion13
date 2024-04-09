window.addEventListener("load", function () {
  var header = document.querySelector("h1");
  header.style.color = "violet";
  header.style.textAlign = "center";
});

window.addEventListener("dblclick", function () {
  this.alert(new Date());
});

document.querySelector("#toggle").addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("#emailBox").classList.remove("hidden");
  } else {
    document.querySelector("#emailBox").classList.add("hidden");
  }
});
