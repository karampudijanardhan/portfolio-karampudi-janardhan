 function Fun(){
var mail=document.getElementById("email").value;
var pass=document.getElementById("passowrd").value;
   if(mail=="janardhankarampudi@gmail.com"&&pass=="kvramana")
   {
    window.location.href="karampudijanardhan.REUME.pdf";
    confirm("login succesfull");
   }
   else{
    window.confirm("not login");
    return;
   }
 }
