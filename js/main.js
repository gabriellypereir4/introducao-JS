let titulo = document.querySelector(".titulo");
titulo.textContent = "Maçã";

var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc")

if(peso < 0 || peso > 1000){
    console.log("Peso inválido!");
}

if(altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
}


var imc = peso / (altura * altura) 

tdImc.textContent = imc