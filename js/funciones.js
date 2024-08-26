function encriptar() {
  let encriptadoAlgunaVez = false;
  const textoOriginal = document.getElementById("parrafoEncriptado").value;

  // Validación más flexible (permite acentos y otros caracteres especiales)
  if (!/^[a-z\s]*$/.test(textoOriginal)) {
    alert(
      "Por favor, ingresa solo letras minúsculas, sin caracteres especiales."
    );
    return;
  }

  const textoEncriptado = textoOriginal
    .replace(/e/gi, "enter")
    .replace(/o/gi, "ober")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/u/gi, "ufat");

  document.getElementById("msjDesencriptado").innerHTML = textoEncriptado;
  if (!encriptadoAlgunaVez) {
    document.getElementById("textoCopia").style.display = "block";
    encriptadoAlgunaVez = true;
  }
}
function desencriptar() {
  const textoOriginal = document
    .getElementById("parrafoEncriptado")
    .value.toLowerCase();

  const textoEncriptado = textoOriginal
    .replace(/enter/gi, "e")
    .replace(/ober/gi, "o")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ufat/gi, "u");

  document.getElementById("msjDesencriptado").innerHTML = textoEncriptado;
}

function copiarTexto() {
  const contenido = document.querySelector("#msjDesencriptado");
  contenido.select();
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    title: "¡Copiado!",
    text: "El texto se ha copiado al portapapeles.",
  });
}
