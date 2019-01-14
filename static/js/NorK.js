function putcarrer_photo(){
  var carrervalue = localStorage.getItem("carrer");
  n_carrer.src = "../static/img/" + carrervalue + ".jpg";
}

function docomo() {
  var carrervalue = localStorage.getItem("carrer");
  if(carrervalue == "docomo"){
    location.href = "Kagreement.html";
  } else {
    location.href = "Nagreement.html";
  }
}

function pass() {
  location.href = "pass.html";
}
