var email = document.querySelector(".email");
var submitButton = document.querySelector(".button");


function validation(){
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailError = document.querySelector(".emailError");
    if(!re.test(email.value)){
        email.classList.add("error");
        emailError.innerHTML = "please enter a valid email address";
    }
    else{
        if(email.classList.contains("error")){
            email.classList.remove("error");
        }
        location.reload();
    }
}