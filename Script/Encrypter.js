// Variables a utilizar


// Funcion para mostrar texto encriptado y eliminar imagen de fondo
function DisplayBg() {
    if (document.getElementById("encrypter").value) {
        document.getElementById("divNotfound").style.display = "none";

        var valueInput = document.getElementById("encrypter").value;
        document.getElementById("encriptedText").innerHTML = valueInput;
        document.getElementById("divEncripted").style.display = "block";
        console.log(valueInput);
    }
}

// funcion para copiar texto
function CopyText() {
    var content = document.getElementById('encriptedText').innerHTML;
    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Texto Copiado")
    })
        .catch(err => {
        console.log('Error: ', err);
    })
}
