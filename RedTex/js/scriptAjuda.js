var enviarMensagem = document.getElementById('enviarMensagem')

enviarMensagem.addEventListener('submit', function(e){
    alert("Mensagem enviada!")
    window.location.href="paginaInicial.html"
    e.preventDefault()
})