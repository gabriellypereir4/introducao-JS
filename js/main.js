let titulo = document.querySelector(".titulo");
titulo.textContent = "Maçã";

var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

console.log(paciente) // tr
console.log(tdPeso) // td que tem o peso
console.log(peso) // Obter 100
console.log(tdAltura) // td que tem a altura
console.log(altura) // Obter 2.00