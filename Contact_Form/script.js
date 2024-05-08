const form = document.querySelector("form"),
fullName = document.getElementById("name"),
email = document.getElementById("email"),
phone = document.getElementById("phone"),
sub = document.getElementById("subject"),
msg = document.getElementById("message");



function sendEmail() {
   // console.log("hi")
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value}
    <br> Phone Number: ${phone.value} <br> Subject: ${sub.value} <br> Message: ${msg.value}`;

    //console.log(bodyMessage);
    Email.send({
        
        SecureToken : "53a62d02-3cd6-4a4c-866c-ee2fbc4931d5",
        To: 'limbu.srijana900@gmail.com',
        From: "limbu.srijana900@gmail.com",
        Subject : sub,
        Body : bodyMessage
    }).then(
        message => {
            if(message == 'OK') {
                Swal.fire({
                    title: "Successful!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                  });
            }
            
        }
    );

    
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    // checks if the string matches the typical structure of an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorTxtEmail = document.querySelector(".error-text.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address.";
        }
        else {
            errorTxtEmail.innerText = "Email can't be blank!";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if(!fullName.classList.contains("error") &&
     !email.classList.contains("error")&& !phone.classList.contains("error")
     && !sub.classList.contains("error")&& !msg.classList.contains("error")) {
        // console.log("ok");

        sendEmail();

     }
})











