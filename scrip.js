document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    const inputNombre = document.querySelector("#nombre");
    const inputCorreo = document.querySelector("#correo");
    const inputContrasena = document.querySelector("#contraseña");
    const inputConfirm = document.querySelector("#confirm");

    formulario.addEventListener("submit", function (evento) {
    
        if (inputNombre.value.trim() === "" || 
            inputCorreo.value.trim() === "" || 
            inputContrasena.value.trim() === "" || 
            inputConfirm.value.trim() === "") {
            
            evento.preventDefault();
            alert("Error: Todos los campos son obligatorios.");
            return;
        }

        if (!inputCorreo.value.includes("@")) {
            evento.preventDefault();
            alert("Error: El correo electrónico debe contener el símbolo '@'.");
            inputCorreo.focus();
            return;
        }

        if (inputContrasena.value !== inputConfirm.value) {
            evento.preventDefault();
            alert("Error: Las contraseñas no coinciden.");
            inputConfirm.focus();
            return;
        }

    });
});