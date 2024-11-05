function sub(){
    var mail=document.getElementById("email").value;
    var nam=document.getElementById("name").value;
    var mess=document.getElementById("message").value;
       if(mail==="janardhankarampudi@gmail.com"&&nam==="janardhan"&&mess==="welcome to java script")
       {
        window.location.href="portfolio.html";
        confirm("sumbit succesfull");
       }
       else{
        window.confirm("not login");
        return;
       }
     }
    