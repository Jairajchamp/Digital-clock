var what = document.querySelector(".clock");
function setClock(){
  const date = new Date();
  var hrs = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  if (hrs<10){
    hrs  = "0"+hrs;
  }
  else if (min<10){
    min = "0"+min;
  }
  else if (sec<10){
    sec = "0"+sec;
  }

  else if (hrs>12){
    hrs=hrs-12;
    time="PM"
  }
  else if (hrs==0) {
    time="AM"
  }
  var time = "AM"
  h= hrs.toString();
  m = min.toString();
  s = sec.toString();
 var clocks = h+":"+m+":"+s+time;
what.innerHTML= clocks;



}

setInterval(setClock,100);
var click = document.querySelector("body").addEventListener("keypress",function(){
  document.querySelector("body").classList.add("java");
});
