function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



const btn = document.getElementById("regBtn")



btn.addEventListener("click", e => {
    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;
    const nombre = document.getElementById("nombre").value
const apellido = document.getElementById("apellido").value
const email = document.getElementById("email").value
const check = document.getElementById("terminos").checked   

if ((email == "") || (nombre == "") || (pass1 == "") || (pass2 == "") || (apellido == "") || (check == "")) {  //COMPRUEBA CAMPOS VACIOS
    
    return showAlertError()

}
else if (pass1.length < 6){

    return showAlertError();
}
else if(pass1 !== pass2) {

    return showAlertError();
}

else{
    return showAlertSuccess()

}

    
});







