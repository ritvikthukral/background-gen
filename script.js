var c1=document.querySelector("#c1");
var c2=document.querySelector("#c2");
var doc=document.querySelector("body");



const bgchange=()=>{
  doc.style.background="linear-gradient(to left,"+c1.value+","+c2.value+")";
  document.querySelector("#ret").innerHTML=`linear-gradient(to-left, ${c1.value},${c2.value});`
}


c1.addEventListener("input",bgchange);
c2.addEventListener("input",bgchange);

document.querySelector("#ret").innerHTML=`linear-gradient(to-left, ${c1.value},${c2.value});`

