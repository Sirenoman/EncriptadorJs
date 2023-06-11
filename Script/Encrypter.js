// Autor: Jonathan Ariel Cabrera
// Fecha: 2023/06/10 
// Descripcion: Script para encriptar y desencriptar texto

// Funcion de boton encriptar
function Encrypt() {
    if(document.getElementById("encrypter").value){
        var textInput = document.getElementById("encrypter").value;
        textInput = EncryptText(textInput);
        DisplayBg(textInput);
    }
}
// Funcion de boton desencriptar
function Decrypt() {
    if(document.getElementById("encrypter").value){
        var textInput = document.getElementById("encrypter").value;
        textInput = DecryptText(textInput);
        DisplayBg(textInput);
    }
}

// Funcion para mostrar texto encriptado y eliminar imagen de fondo
function DisplayBg(valueInput){
    document.getElementById("divNotfound").style.display = "none";
    document.getElementById("encriptedText").innerHTML = valueInput;
    document.getElementById("divEncripted").style.display = "block";
    console.log(valueInput);
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

// Funcion especializada para el encriptado de texto
function EncryptText(value) {
    var value = value.toLowerCase();
    value = value.replace(/e/g, "enter");
    value = value.replace(/i/g, "imes");
    value = value.replace(/a/g, "ai");
    value = value.replace(/o/g, "ober");
    value = value.replace(/u/g, "ufat");
    return value;
}
// Funcion especializada para el desencriptado de texto
function DecryptText(value) {
    var value = value.toLowerCase();
    value = value.replace(/ai/g, "a");
    value = value.replace(/enter/g, "e");
    value = value.replace(/imes/g, "i");
    value = value.replace(/ober/g, "o");
    value = value.replace(/ufat/g, "u");
    return value;
}