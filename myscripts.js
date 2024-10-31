function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
 function getsale()
 {
 var  my_price     = document.getElementById("myprice").value;
 var my_percentage = document.getElementById("mypercentage").value;
 
 if(my_price == "")
 {
 alert("the price can't be empty");
 return;
 
 }
 
  if(my_percentage == "")
 {
 alert("the percentage can't be empty");
  return;
 
 }
 
  if(my_price < 0)
 {
 alert("the price can't be negatice");
  return;
 }
 
  if(my_percentage < 0)
 {
 alert("the percentage can't be negatice");
  return;
 }
 
 
   if(my_percentage > 100)
 {
 alert("the percentage can't be grater then 100");
  return;
 }
 
 
 
 
 var equation = my_percentage *  my_price /100;
 var total = my_price - equation;
  document.getElementById("myresult").value = total;
  }
  
  
  
  
  
  
  
        