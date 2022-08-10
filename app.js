'use strict'

function mostrarResultado(){

    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const numForm = document.getElementById('form-nums')
    const resultado = document.getElementById('result')
    
    if(numForm.reportValidity()){
        if(num1 > num2){
            const subtracao = num1 - num2
            resultado.textContent = `Subtração igual a:${subtracao}`
        }else{
            const subtracao = num2 - num1 
            resultado.textContent = `Subtração igual a:${subtracao}`
        }
        
    }
    console.log(num1)
    console.log(num2)
}

document.getElementById('calcular').addEventListener('click', mostrarResultado)