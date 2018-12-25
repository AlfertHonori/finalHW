window.onload = function (){
  localStorage.clear();
}

function push1() {
  var newphone = document.getElementsByName("nphone");
  var name = " ";
  for (var i = 0; i<newphone.length; i++) {
    if(newphone[i].checked) {
      name = newphone[i].value
    }
  }
  localStorage.setItem("phone", name);
}

function show1() {
  var value = localStorage.getItem("phone");
  alert(value);
}
