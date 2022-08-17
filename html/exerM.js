'use strict'

function tratarDados(){

    const nome = document.getElementById('nome').value
    const sexo = document.getElementById('sexo').value.toUpperCase()
    const numForm = document.getElementById('form-name')
    const resultado = document.getElementById('resultM')
    if(numForm.reportValidity()){
        if(sexo == 'MASCULINO' ){
            resultado.textContent = `Olá sr. ${nome}`
        }else if(sexo == 'FEMININO'){
            resultado.textContent = `Olá sra. ${nome}`
        }else if (sexo != 'MASCULINO'){
            resultado.textContent = `Você não digitou um sexo válido`
        }else if (sexo != 'FEMININO'){
            resultado.textContent = `Você não digitou um sexo válido`
        }
    }
}

document.getElementById('aqui').addEventListener('click', tratarDados)
