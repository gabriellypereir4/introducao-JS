var numeros = document.querySelectorAll('.numeros')

for(let contador = 0; contador < numeros.length; contador++){
    var numero = numeros[contador]
    var numeroA = numero.querySelector('.info-A').textContent
    var numeroB = numero.querySelector('.info-B').textContent
    var soma = parseInt(numeroA) +  parseInt(numeroB)
    var total = numero.querySelector('.info-total')
    total.textContent = soma
}

