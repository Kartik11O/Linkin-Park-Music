var NavPhone = document.getElementById("NavPhone")
var Main_Page2 = document.getElementById("Main_Page2")

function Open_Close(){

   if(NavPhone.style.display == "none"){
    NavPhone.style.display = "block"
    Main_Page2.style.display = "none"
   }

   else{
    NavPhone.style.display = "none"
    Main_Page2.style.display = "block"
   }

}