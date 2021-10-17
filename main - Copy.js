var img=["dad.jpg","m.png","b.jpg","me.jpg","lb.jpg"];
var reason=["2.my papa","3. my mom","my brother","me","my small brother"];
var n=0;
function next(){
  document.getElementById("book").src=img[n];
   document.getElementById("trees").innerHTML=reason[n];
  n++;
  if(n>=4)
  {
    n=0;
  }
}