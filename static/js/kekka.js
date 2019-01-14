function result(){
  var newmashin = localStorage.getItem("newmashin");
  var oldmashin = localStorage.getItem("oldmashin");
  var shitadori = localStorage.getItem("shitadori");
  var tuuwa = localStorage.getItem("tuuwa");
  var data = localStorage.getItem("data");

  document.getElementById("pd_ophone").innerHTML = oldmashin;
  document.getElementById("pd_phone").innerHTML = newmashin;
  document.getElementById("pd_shitadori").innerHTML = shitadori;
  document.getElementById("pd_tuuwa").innerHTML = tuuwa;
  document.getElementById("pd_data").innerHTML = data;

}
