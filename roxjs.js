
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function grid_view() {
	console.log("gridview");

  document.getElementById("header-hidden").style.display = "none";
  

var elementList = document.querySelectorAll("#parent-grid > div");	
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-size_12-of-12','slds-align_absolute-center');
    elementList[i].classList.add('slds-large-size_3-of-12');
}


var elementList = document.querySelectorAll("#parent-grid > div > div"); 
for(var i = 0; i < elementList.length; i++)
{
  elementList[i].classList.remove('slds-large-size_3-of-12');
    elementList[i].classList.add('slds-large-size_12-of-12');
}

var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(1) "); 
for(var i = 0; i < elementList.length; i++)
{
  elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_9','slds-large-size_3-of-12');
    elementList[i].classList.add('slds-align_absolute-center');
}
console.log("1nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(1)"));


  var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(2) ");	
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_1','slds-large-size_3-of-12','slds-large-size_1-of-1');
    elementList[i].classList.add('slds-align_absolute-center','slds-size_12-of-12');
}
console.log("2nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(2)"));


var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(2) img"); 
for(var i = 0; i < elementList.length; i++)
{
  
    
 elementList[i].classList.remove('slds-large-size_1-of-1');
  
    
}


var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(3)");	
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_2','slds-large-size_3-of-12');
    elementList[i].classList.add('slds-size_12-of-12','slds-align_absolute-center');
}
console.log("3nd child>>>>"+document.querySelectorAll("#parent-grid > div > div :nth-child(3)"));  


var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(4)");	//console.log(document.querySelectorAll("#parent-grid > div"));
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_3','slds-large-size_1-of-12','email-hidden');
    elementList[i].classList.add('slds-large-size_12-of-12','slds-align_absolute-center','email-show');
}
console.log("4nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(4)"));   


var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(5)");
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_4','slds-large-size_3-of-12','email-hidden');
    elementList[i].classList.add('slds-size_1-of-1','slds-align_absolute-center','email-show');
}
console.log("5nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(5)")); 


var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(6)");
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_5','slds-large-size_3-of-12',);
    elementList[i].classList.add('slds-large-size_12-of-12','slds-align_absolute-center');
}
console.log("6nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(6)")); 


var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(7)");
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_6','slds-large-size_3-of-12','ammount-hidden');
    elementList[i].classList.add('slds-large-size_12-of-12','slds-align_absolute-center','hidden-ammount');
}
console.log("7nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(7)"));


var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(8)");
for(var i = 0; i < elementList.length; i++)
{
	elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_7','slds-large-size_3-of-12','ammount-hidden');
    elementList[i].classList.add('slds-size_1-of-1','slds-align_absolute-center','hidden-ammount');
}
console.log("8nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(8)"));



var elementList = document.querySelectorAll("#parent-grid   div  div :nth-child(9)");
for(var i = 0; i < elementList.length; i++)
{
  elementList[i].classList.remove('slds-large-size_2-of-12','slds-large-order_8','slds-large-size_3-of-12','ammount-hidden');
    elementList[i].classList.add('slds-size_1-of-1','slds-align_absolute-center','hidden-ammount');
}
console.log("9nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(9)"));



var elementList = document.querySelectorAll("#parent-grid  div  footer");
for(var i = 0; i < elementList.length; i++)
{
  elementList[i].classList.remove('slds-large-size_2-of-12','slds-large-order_8','slds-large-size_3-of-12','email-hidden');
    elementList[i].classList.add('slds-size_1-of-1','slds-align_absolute-center','email-show');
}
console.log("9nd child>>>>"+document.querySelectorAll("#parent-grid  div  footer"));

  
}



function list_view() {
	console.log("listview");
  document.getElementById("header-hidden").style.display = "flex";
//document.getElementById('parent-grid').childNodes[0].className += " slds-large-size_12-of-12";

var elementList = document.querySelectorAll("#parent-grid > div"); 
for(var i = 0; i < elementList.length; i++)
{
  elementList[i].classList.remove('slds-large-size_3-of-12');
    elementList[i].classList.add('slds-size_12-of-12','slds-align_absolute-center');
}


var elementList = document.querySelectorAll("#parent-grid > div > div"); 
for(var i = 0; i < elementList.length; i++)
{
  elementList[i].classList.remove('slds-large-size_12-of-12','slds-wrap');
    elementList[i].classList.add('slds-large-size_3-of-12');
}

var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(1) "); 
for(var i = 0; i < elementList.length; i++)
{
  //elementList[i].classList.remove();
    elementList[i].classList.add('slds-large-size_1-of-12','slds-large-order_9');
}
console.log("1nd child>>>>"+document.querySelectorAll("#parent-grid > div > div :nth-child(1)"));

var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(1) span"); 
for(var i = 0; i < elementList.length; i++)
{
  //elementList[i].classList.remove();
    elementList[i].classList.remove('slds-large-size_1-of-12');
}
console.log("1nd child>>>>"+document.querySelectorAll("#parent-grid > div > div :nth-child(1)"));

var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(1) p"); 
for(var i = 0; i < elementList.length; i++)
{
  //elementList[i].classList.remove();
    elementList[i].classList.remove('slds-large-size_1-of-12');
}
console.log("1nd child>>>>"+document.querySelectorAll("#parent-grid > div > div :nth-child(1)"));

var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(1) b"); 
for(var i = 0; i < elementList.length; i++)
{
  //elementList[i].classList.remove();
    elementList[i].classList.remove('slds-large-size_1-of-12');
}
console.log("1nd child>>>>"+document.querySelectorAll("#parent-grid > div > div :nth-child(1)"));


  var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(2) "); 
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-size_12-of-12');
    elementList[i].classList.add('slds-large-size_1-of-12','slds-large-order_1');
}
console.log("2nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(2)"));

var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(2) img"); 
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_9');
 elementList[i].classList.add('slds-large-size_1-of-1');
  
    
}
console.log("2nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(2)"));

var elementList = document.querySelectorAll("#parent-grid  div  div :nth-child(2) span"); 
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-large-size_1-of-12','slds-large-order_9');
    
}
console.log("2nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(2)"));




var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(3)");  
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-size_12-of-12');
    elementList[i].classList.add('slds-large-size_3-of-12','slds-large-order_2');
}
console.log("3nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(3)"));  


var elementList = document.querySelectorAll("#parent-grid > div div :nth-child(4)");  //console.log(document.querySelectorAll("#parent-grid > div"));
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-large-size_12-of-12','email-show');
    elementList[i].classList.add('slds-large-size_1-of-12','slds-large-order_3','email-hidden');
}
console.log("4nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(4)"));   


var elementList = document.querySelectorAll("#parent-grid  > div  div :nth-child(5)");
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-size_1-of-1','email-show');
    elementList[i].classList.add('slds-large-size_1-of-12','slds-large-order_4','email-hidden');
}
console.log("5nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(5)")); 


var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(6)");
for(var i = 0; i < elementList.length; i++)
{
 
    elementList[i].classList.remove('slds-large-size_12-of-12');
     elementList[i].classList.add('slds-large-size_1-of-12','slds-large-order_5');
}
console.log("6nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(6)")); 


var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(7)");
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-large-size_12-of-12','hidden-ammount');
    elementList[i].classList.add('slds-large-size_1-of-12','slds-large-order_6','ammount-hidden','text-font1');
}
console.log("7nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(7)"));


var elementList = document.querySelectorAll("#parent-grid > div  div :nth-child(8)");
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-size_1-of-1','hidden-ammount');
    elementList[i].classList.add('slds-large-size_1-of-12','slds-large-order_7','ammount-hidden','text-font1');
}
console.log("8nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(8)"));



var elementList = document.querySelectorAll("#parent-grid > div div :nth-child(9)");
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-size_1-of-1','hidden-ammount');
    elementList[i].classList.add('slds-large-size_2-of-12','slds-large-order_8','ammount-hidden');
}
console.log("9nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(9)"));

var elementList = document.querySelectorAll("#parent-grid > div div :nth-child(9) img");
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-large-size_2-of-12','slds-large-size_1-of-12','slds-size_1-of-4');
    elementList[i].classList.add('slds-large-size_12-of-12');
    
}
console.log("9nd child>>>>"+document.querySelectorAll("#parent-grid  div  div :nth-child(9)"));




var elementList = document.querySelectorAll("#parent-grid > div footer");
for(var i = 0; i < elementList.length; i++)
{
  
    elementList[i].classList.remove('slds-size_1-of-1','email-show');
    elementList[i].classList.add('slds-large-size_2-of-12','slds-large-order_8','slds-large-size_3-of-12','email-hidden');
}
console.log("9nd child>>>>"+document.querySelectorAll("#parent-grid  div  footer"));


}

