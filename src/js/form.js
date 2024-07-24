const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.input-dados');
const avisoCampoObrigatorio = document.querySelectorAll('.mensagem-aviso');

inputs.forEach(function(item){
    item.addEventListener('input', function(){
        if(item.value.trim() !== ""){
            item.classList.add('input-preenchido');
        }else{
            item.classList.remove('input-preenchido');
        }
    });
});

formulario.addEventListener('submit', function(event){
    let formularioValido = true;

    inputs.forEach(function(item, index) {
        if(item.value.trim() === ""){
            item.classList.add('input-erro');
            avisoCampoObrigatorio[index].classList.add('mensagem-erro');
            formularioValido = false;
        }else{
            item.classList.remove('input-erro');
            avisoCampoObrigatorio[index].classList.remove('mensagem-erro');
        }
    });

    if(!formularioValido){
        event.preventDefault();
    }
});