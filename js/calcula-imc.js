let titulo = document.querySelector('.titulo')
titulo.textContent = 'Maçã'

var pacientes = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]
    
var tdPeso = paciente.querySelector('.info-peso')
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector('.info-altura')
var altura = tdAltura.textContent

var tdImc = paciente.querySelector('.info-imc')

var pesoEValido = validaPeso(peso)
var alturaEValida = true

if(!pesoEValido){
    console.log('Peso inválido!')
    pesoEValido = false
    tdImc.textContent = 'Peso inválido!'
    paciente.classList.add('paciente-invalido')
}

if(altura <= 0 || altura >= 3.00){
    console.log('Altura inválida!')
    alturaEValida = false
    tdImc.textContent = 'Altura inválida!'
    paciente.classList.add('paciente-invalido')
}

if( alturaEValida && pesoEValido){
    var imc = calculaImc(peso, altura)
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

function calculaImc(peso,altura){
    var imc = 0

    imc = peso / (altura * altura)

    return imc.toFixed(2)
}