function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase
        .replace(/e/img, "enter")
        .replace(/o/img, "ober")
        .replace(/i/img, "imes")
        .replace(/a/img, "ai")
        .replace(/u/img, "ufat");

    document.getElementById("textoResultado").textContent = textoEncriptado;
}

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoDesencriptado = frase
        .replace(/enter/img, "e")
        .replace(/ober/img, "o")
        .replace(/imes/img, "i")
        .replace(/ai/img, "a")
        .replace(/ufat/img, "u");

    document.getElementById("textoResultado").textContent = textoDesencriptado;
}

function copiar() {
    var contenido = document.getElementById("textoResultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(err => console.error("Error al copiar el texto: ", err));
}

// Añadir los event listeners
document.querySelector("#botonEncriptado").addEventListener("click", encriptar);
document.querySelector("#botonDesencriptado").addEventListener("click", desencriptar);
document.querySelector("#botonCopiar").addEventListener("click", copiar);
