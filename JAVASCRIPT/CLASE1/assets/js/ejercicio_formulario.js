
let form = document.getElementById("form-contacto");
let event = 'submit';

function sendEmail(e) {
    e.preventDefault();

    let name = document.getElementById("txtName").value;
    let subject = document.getElementById("txtSubject").value;
    let email = document.getElementById("txtEmail").value;
    let message = document.getElementById("txtMessage").value;

    console.log("Nombre: " + name + ", " + subject + ", " + email + ", " + message);

};

form.addEventListener(event, sendEmail);

