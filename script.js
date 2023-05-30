const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".msg");



function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0) {
      // Alert the user 
        alert("Desactiva Mayus en ingresa solo letras")
        location.reload();
        return true;
    }
}

function btnEnc() {
 if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"

    }
}

function btnDes() {
  if(!validarTexto()) {
  const textoDes = desencriptar(mensaje.value);
  textArea.value = textoDes;
  mensaje.value = "";

  mensaje.value = textoDes;
  textArea.value = "";

    }}

function copiar() {
  var text = document.querySelector('.msg').value;
  navigator.clipboard.writeText(text);

  // Alert the user 
  alert('Texto copiado!');
}



function encriptar(stringEncriptado) {
  var raiz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()
  for (let i = 0; i < raiz.length; i++) {
    if(stringEncriptado.includes(raiz[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(raiz[i][0],raiz[i][1])
    } 
  }
  return stringEncriptado;
}

function desencriptar(_stringdesencriptado) {
    var raiz = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    _stringdesencriptado = _stringdesencriptado.toLowerCase()
    for (let i = 0; i < raiz.length; i++) {
      if(_stringdesencriptado.includes(raiz[i][0])){
        _stringdesencriptado = _stringdesencriptado.replaceAll(raiz[i][0],raiz[i][1])
      } 
    }
    return _stringdesencriptado;
  }