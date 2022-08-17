'use strict'
function mediaNotas(){

    const priNota = parseFloat(document.getElementById('nota1').value)
    const segNota = parseFloat(document.getElementById('nota2').value)
    const terNota = parseFloat(document.getElementById('nota3').value)
    const quaNota = parseFloat(document.getElementById('nota4').value)
    const numForm = document.getElementById('form-nums3')
    const resultado = document.getElementById('result3')
    const calcular = (priNota + segNota + terNota + quaNota)/ 4
    
    if(numForm.reportValidity()){
        if(calcular >= 5){
            resultado.textContent = `Sua média é:${calcular} e você foi aprovado. Parabéns!`
        }else{
            resultado.textContent = `Sua média é:${calcular} e você foi reprovado!`
        }
    }
}
document.getElementById('media').addEventListener('click', mediaNotas)