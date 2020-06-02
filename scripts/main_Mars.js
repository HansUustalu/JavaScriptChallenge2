
var time2 = document.getElementById("time");
time2.innerHTML = time;

var div = document.getElementById("box");

function red(){
  div.setAttribute("id" , "colorDiv");
}

var div2 = document.getElementById("box");
function dif(){
  div2.setAttribute("id" , "box");
}

var today = new Date();
var str = today.toGMTString();
var time3 = document.getElementById("time2");
time3.innerHTML = str;

setInterval(function(){
  var date = new Date();
  var time = date.toLocaleTimeString();
   time2.innerHTML = time;
 }, 1000);

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

animate.onclick = function() {
   this.style.fontSize = '50px';
 };
