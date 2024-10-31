function regi(){
    var mail=document.getElementById("email").value;
    var pass=document.getElementById("passowrd").value;
    var names=document.getElementById("name").value;
       if(mail=="janardhankarampudi@gmail.com"&&pass=="kvramana"&&names=="karampudi janardhan")
       {
        window.location.href="jana1.html";
        confirm("Register succesfull");
       }
       else{
        window.confirm("not Register");
        return;
       }
     }
    