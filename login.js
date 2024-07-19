function signin() {
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    let mainpage = "main.html";

    var emailcheck = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var tnf = emailcheck.test(email);

    if (tnf == 0 && password === "") {

        document.getElementById('email-error-bck').style.display = "inline-block";
       
        document.getElementById('password-error-bck').style.display = "inline-block";
    }
    else {
        var bothdone=1;
    }
    
    
    
    if (tnf == 0 || email === "") {
        document.getElementById('email-error-bck').style.display = "inline-block";
    }
    else {
        var emaildone=1;
    }


    if (password === "" || password.trim().length<8) {

        document.getElementById('password-error-bck').style.display = "inline-block";
    }
    else {
        var passworddone=1;
    }

    var sum = bothdone+passworddone+emaildone;

    
    
    if (sum==3) {

        document.getElementById("myForm").submit();
    } 
    
    else {

        event.preventDefault();
        return false;

    }

 
}

window.onload = function (){
    document.getElementById('email').value="";
    document.getElementById('password').value="";


}
