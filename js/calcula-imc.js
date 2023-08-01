let titulo = document.querySelector('.titulo')
//titulo.textContent = 'Maçã' //muda o conteúdo da classe título para Maçã

let pacientes = document.querySelectorAll('.paciente') // All pega todos as classes

for(let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i]
    
let tdPeso = paciente.querySelector('.info-peso')
let peso = tdPeso.textContent

let tdAltura = paciente.querySelector('.info-altura')
let altura = tdAltura.textContent

let tdImc = paciente.querySelector('.info-imc')

let pesoEValido = validaPeso(peso)
let alturaEValida = validaAltura(altura)

if(!pesoEValido){
    console.log('Peso inválido!')
    pesoEValido = false
    tdImc.textContent = 'Peso inválido!'
    paciente.classList.add('paciente-invalido')
}

if(!alturaEValida){
    console.log('Altura inválida!')
    alturaEValida = false
    tdImc.textContent = 'Altura inválida!'
    paciente.classList.add('paciente-invalido')
}

if( alturaEValida && pesoEValido){
    let imc = calculaImc(peso, altura)
    tdImc.textContent = imc
}   

}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function calculaImc(peso,altura){
    let imc = 0

    imc = peso / (altura * altura)

    return imc.toFixed(2)
}