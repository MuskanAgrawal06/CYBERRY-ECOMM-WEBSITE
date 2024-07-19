
function myfunction() {



    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('mobilenumber').value;
    var password = document.getElementById('password').value;
    var cfpassword = document.getElementById('cfpassword').value;

    var emailcheck = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var tnf = emailcheck.test(email);

    var mobilecheck = /^[0-9]{10}$/;
    var validmobilenumber = mobilecheck.test(number);

    var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    var validpassword = passwordcheck.test(password);



    if (name === "") {
        document.getElementById('name-valid').style.display = "inline-block";

    }
    else {
        var namedone = 1;
    }


    if (email === "" || tnf == 0) {
        document.getElementById('email-valid').style.display = "inline-block";
    }
    else {
        var emaildone = 1;
    }


    if (number === "" || validmobilenumber == 0) {
        document.getElementById('number-valid').style.display = "inline-block";
    }
    else {
        var numberdone = 1;
    }


    if (password === "") {
        document.getElementById('password-valid').style.display = "inline-block";
    }


    else if (!validpassword) {
        document.getElementById('password-valid').innerHTML = "Password should contain at least eight characters, including uppercase and lowercase letters, numbers, and special characters.";
        document.getElementById('password-valid').style.display = "inline-block";
    }


    else {
        var passworddone = 1;
    }



    if (cfpassword === "") {
        document.getElementById('cfpassword-valid').style.display = "inline-block";
    
    }
    else {
        var  cfpassworddone1=1;
      }

    if (password != cfpassword) {
        document.getElementById('matchpassword').style.display = "inline-block";
    }
    
    else {
        var  cfpassworddone2=1;
      }

 var sum = namedone+emaildone+numberdone+passworddone+cfpassworddone1+cfpassworddone2;



    if (sum==6) {

        document.getElementById("myForm").submit();
    } 
    
    else {

        event.preventDefault();
        return false;

    }

}




