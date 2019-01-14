window.onload = function (){
  localStorage.clear();
}

function putmemori() {
  var old_mashin = document.getElementsByName("omashin");
  var om_name = " ";
  for (var i = 0; i<old_mashin.length; i++) {
    if(old_mashin[i].checked) {
      om_name = old_mashin[i].value
    }
  }
  localStorage.setItem("oldmashin", om_name);

  var new_mashin = document.getElementsByName("nmashin");
  var nm_name = " ";
  for (var i = 0; i<new_mashin.length; i++) {
    if(new_mashin[i].checked) {
      nm_name = new_mashin[i].value
    }
  }
  localStorage.setItem("newmashin", nm_name);

  var shitadori = document.getElementsByName("shitadori");
  var sh_name = " ";
  for (var i = 0; i<shitadori.length; i++) {
    if(shitadori[i].checked) {
      sh_name = shitadori[i].value
    }
  }
  localStorage.setItem("shitadori", sh_name);

  var tuuwa = document.getElementsByName("tuuwa");
  var tu_name = " ";
  for (var i = 0; i<tuuwa.length; i++) {
    if(tuuwa[i].checked) {
      tu_name = tuuwa[i].value
    }
  }
  localStorage.setItem("tuuwa", tu_name);

  var data = document.getElementsByName("data");
  var da_name = " ";
  for (var i = 0; i<data.length; i++) {
    if(data[i].checked) {
      da_name = data[i].value
    }
  }
  localStorage.setItem("data", da_name);
}
