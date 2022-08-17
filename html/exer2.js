'use strict'
function valorInteiro(){
    const inteiro = parseFloat(document.getElementById('numInt').value)
    const resultado = document.getElementById('result2');
    const numForm = document.getElementById('form-nums2')
    if(numForm.reportValidity()){
        if(inteiro < 0){
            const subtracao = inteiro * -1;
            resultado.textContent = `O valor digitado é: ${subtracao}`
        }else{
            resultado.textContent = `O valor digitado é: ${inteiro}`
        }
    }
}
document.getElementById('exibir').addEventListener('click', valorInteiro)