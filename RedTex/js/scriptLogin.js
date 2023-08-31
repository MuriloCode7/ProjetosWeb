var formLogin = document.getElementById('formLogin')
var nomeUsuario = document.getElementById('nomeUsuario')

formLogin.addEventListener('submit', function(e){
    alert("Bem-vindo(a) de volta " + nomeUsuario.value +"!")
    window.location.href="paginaInicial.html"
    e.preventDefault()
})