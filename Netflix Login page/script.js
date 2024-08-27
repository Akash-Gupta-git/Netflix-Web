let email = document.querySelector("#login")
let pswd = document.querySelector("#pswd")
let submit = document.querySelector("#submit")


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;






   

let flag = true;
function validation() { 
    const userEmail = email.value;
 
    if (emailRegex.test(userEmail)) {
      alert("Email is valid");
      email.style.border = "1px solid grey";
      email.value = "";

      } else {
      alert("Wrong ! email address");
      email.style.border = "2px solid red";
      email.value = "";
    }        
    flag = false;
    
}

    
    // if(login.value == "" || pswd.value == "") {
    //     if(email.value == "") {
    //         email.style.border = "2px solid red"
    //     }
    //     if(pswd.value == "") {
    //         pswd.style.border = "2px solid red"
    //     } else {
    //         login.style.border = "none"
    //         pswd.style.border = "none"
    //     }
    //     alert("Please! fill the details!");
    // } 