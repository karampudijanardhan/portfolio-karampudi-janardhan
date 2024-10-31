function res(){
    var pass=document.getElementById("passowrd").value;
    var con=document.getElementById("confirm").value;
       if(pass=="kvramana"&&con=="kvramana")
       {
        window.location.href="jana1.html";
        confirm("Rest succesfully");
       }
       else{
        window.confirm("not succesfully");
        return;
       }
     }