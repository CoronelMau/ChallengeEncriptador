const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
}


function encriptar(stringEncriptado) {
  let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringEncriptado.includes(matrizCode[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCode[i][0], matrizCode[i][1]);
    }

  }
  return stringEncriptado;
}

function btnLimpiar() {
  textArea.value = "";
  mensaje.value = "";
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}


function desencriptar(stringDesencriptar) {
  let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptar = stringDesencriptar.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringDesencriptar.includes(matrizCode[i][0])) {
      stringDesencriptar = stringDesencriptar.replaceAll(matrizCode[i][1], matrizCode[i][0]);
    }

  }
  return stringDesencriptar;
}