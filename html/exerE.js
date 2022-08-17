'use strict'

function equacaoArit(){

    const privariA = document.getElementById('variA').value
    const privari = parseFloat(privariA)
    const segvariA = document.getElementById('variB').value
    const segvari = parseFloat(segvariA)
    const tervariA = document.getElementById('variC').value
    const tervari = parseFloat(tervariA)
    const numForm = document.getElementById('form-numsE')
    const resultado = document.getElementById('resultE')
    const arit = Math.pow(segvari,2) - 4 * privari * tervari
    
    if(numForm.reportValidity()){
        if(arit < 0 ){
            resultado.textContent = `Não há solução real`
        }else if(arit > 0){
            console.log(segvari)
            const varix = segvari / -1
            console.log(varix)
            const valoresx = (varix + Math.sqrt(arit)) / (2 * privari)
            const valoresx2 =  (varix - Math.sqrt(arit)) / (2 * privari)
            console.log(varix,arit, privari, valoresx2)
            resultado.innerHTML = `Sua raiz negativa é ${valoresx2} e a raiz positiva é ${valoresx}`
        }else{
            resultado.textContent = 'Solução = 0'
        }
    }
}
document.getElementById('calculo').addEventListener('click', equacaoArit)