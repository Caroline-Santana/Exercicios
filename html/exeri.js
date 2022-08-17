'use strict'

function maiorMenor(){

    const num1 = parseFloat(document.getElementById('vari1').value)
    const num2 = parseFloat(document.getElementById('vari2').value)
    const num3 = parseFloat(document.getElementById('vari3').value)
    const num4 = parseFloat(document.getElementById('vari4').value)
    const num5 = parseFloat(document.getElementById('vari5').value)
    const numForm = document.getElementById('form-numsI')
    const resultado = document.getElementById('resultI')
    
    if(numForm.reportValidity()){
         const maior = Math.max(num1, num2, num3, num4, num5)
         const menor = Math.min(num1, num2, num3, num4, num5)
         resultado.textContent = `O número maior é: ${maior} \n O número menor é: ${menor}`
    }
    console.log(num1)
    console.log(num2)
}

document.getElementById('menor').addEventListener('click', maiorMenor)
