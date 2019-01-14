var img = ["../static/img/コンさる.png","../static/img/さるいっぱい.png","../static/img/コンさるとももちゃん.png","../static/img/コンさる.png"];
var i = 0;

function changeimg(){
  i++;
  if(i >= 3){
    location.href = "first_page.html"
  }
  photo = img[i];
  pimg = document.getElementById("pimg");
  pimg.src = photo;
}
