let bgV = document.getElementById("bg");
let moonV = document.getElementById("moon");
let mountainV = document.getElementById("mountain");
let roadV = document.getElementById("road");
let  nameV = document.getElementById("nameLogo");
// Get the element containing variable
let r = document.querySelector(".name");


window.addEventListener("scroll", function(){
  let value = window.scrollY;
  // In function get style from element containing variable
  let rs = this.getComputedStyle(r);
  // Get value form that element containing variable
  let v1 = rs.getPropertyValue("--aValue");

  bgV.style.bottom = value * 0.5 + "px";
  moonV.style.bottom = value / 5 + "px";
  moonV.style.left = -value * 0.3 + "px";
  mountain.style.bottom = value * 0.15 + "px";
  roadV.style.bottom = -value * 0.15 + "px";
  nameV.style.top = value + (520 * v1) + "px";
});