window.onload = function() {
  localStorage.clear();
}

function putcarrer(carrer) {
  console.log(carrer.innerHTML);
  localStorage.setItem("carrer", carrer.innerHTML);
  location.href = "NorK.html";
}
