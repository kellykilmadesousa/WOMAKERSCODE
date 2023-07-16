addEventListener("submit", validaFormulario )

function validaFormulario (){
  if (document.getElementById("nome").value != "" && document.getElementById("mensagem").value != "") {
    alert("Prontinho! Você enviou uma mensagem para Mae Jemison!")
  } else {
    alert("Por favor, preencha os campos nome e mensagem")
  }
}