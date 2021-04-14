$(document).ready(function(){




var l1 = document.getElementById('l1');
var l5 = document.getElementById('l5');
var r5 = document.getElementById('r5');
var contr = document.getElementById('contr');
window.addEventListener('scroll', raz, false);
window.addEventListener('resize', raz, false);
function raz() {
  var rectl1 = l1.getBoundingClientRect();
  var rectl5 = l5.getBoundingClientRect();
  var rectr5 = r5.getBoundingClientRect();
  var d = document.documentElement;
  var rectD = d.getBoundingClientRect();
  contr.innerHTML = 'height: ' + rectl1.height + '<br>width: ' + rectl1.width + '<br>ah: ' + (rectl5.bottom - rectl1.top) + '<br>l5bottom: ' + rectl5.bottom + '<br>r5bottom: ' + rectr5.bottom + '<br>winh: ' + d.clientHeight;



  document.getElementById('r1').style.top= -rectl1.top*2 + 'px';
  document.getElementById('r2').style.top= -rectl1.top*2 - rectl1.height + 'px';
  document.getElementById('r3').style.top= -rectl1.top*2 - rectl1.height*2 + 'px';
  document.getElementById('r4').style.top= -rectl1.top*2 - rectl1.height*3 + 'px';
  document.getElementById('r5').style.top= -rectl1.top*2 - rectl1.height*4 + 'px';


  if(rectl5.bottom <= d.clientHeight)
  		//window.scrollTo(0,rectl1.height*5-d.clientHeight);
  	 document.getElementById('r5').style.top= 0 + 'px';
  	 document.getElementById('l5').style.top= 0 + 'px';

  	 
}


});