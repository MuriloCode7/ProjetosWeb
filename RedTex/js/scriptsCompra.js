var confirmarCompra = document.getElementById('confirmarCompra')

confirmarCompra.addEventListener('submit', function(e){
    window.location.href="../../paginaInicial.html"
    alert("Compra realizada com sucesso!")
    e.preventDefault()

})

var opNomrmal = document.getElementById('opNormal')
var valorNormal = document.getElementById('valorNormal')

opNomrmal.addEventListener('checked', function(){
valorNormal.style.display == block;

})

