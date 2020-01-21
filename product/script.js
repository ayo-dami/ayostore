if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","devices.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
var x=xmlDoc.getElementsByTagName("pcs");
var y=xmlDoc.getElementsByTagName("drones");
var z=xmlDoc.getElementsByTagName("phones");
var w=xmlDoc.getElementsByTagName("tvs");


var i=0;

function displayProduct()
{
  

image=(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
title=(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
type=(x[i].getElementsByTagName("type")[0].childNodes[0].nodeValue);
price=(x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
year=(x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue);


txt="<p><img style='border: 1px solid #ccc;' src=img/" + image + "></p>" + "<br><b>Title:</b> " + title + "<br><b>year:</b> "+ year +"<br><b>Price:</b> "+ price;
document.getElementById("showPC").innerHTML=txt;

}



function displayProduct2()
{
  

image=(y[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
title=(y[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
type=(y[i].getElementsByTagName("type")[0].childNodes[0].nodeValue);
price=(y[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
year=(y[i].getElementsByTagName("year")[0].childNodes[0].nodeValue);


txt="<p><img style='border: 1px solid #ccc;' src=img/" + image + "></p>" + "<br><b>Title:</b> " + title + "<br><b>year:</b> "+ year +"<br><b>Price:</b> "+ price;
document.getElementById("showDrone").innerHTML=txt;

}

function displayProduct3()
{
  

image=(z[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
title=(z[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
type=(z[i].getElementsByTagName("type")[0].childNodes[0].nodeValue);
price=(z[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
year=(z[i].getElementsByTagName("year")[0].childNodes[0].nodeValue);


txt="<p><img style='border: 1px solid #ccc;' src=img/" + image + "></p>" + "<br><b>Title:</b> " + title + "<br><b>year:</b> "+ year +"<br><b>Price:</b> "+ price;
document.getElementById("showPhone").innerHTML=txt;

}

function displayProduct4()
{
  

image=(w[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
title=(w[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
type=(w[i].getElementsByTagName("type")[0].childNodes[0].nodeValue);
price=(w[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);
year=(w[i].getElementsByTagName("year")[0].childNodes[0].nodeValue);


txt="<p><img style='border: 1px solid #ccc;' src=img/" + image + "></p>" + "<br><b>Title:</b> " + title + "<br><b>year:</b> "+ year +"<br><b>Price:</b> "+ price;
document.getElementById("showTv").innerHTML=txt;

}


function next()
{
if (i<x.length-1)
  {
  i++;
  displayProduct();
  displayProduct2();
  displayProduct3();
  displayProduct4();
  }
}
function previous()
{
if (i>0)
  {
  i--;
  displayProduct();
  displayProduct2();
  displayProduct3();
  displayProduct4();
  }
}

function search() {
  var lessthan;
  var a = document.getElementById("query").value;

  if(a == "less")
  {
    lessthan = "price &lt; 100";
  }

}