document.addEventListener('DOMContentLoaded', function() {
    //Aqui pega os valores dos botões que está pegando a class .botao
    var numeros = document.querySelectorAll('.botao')
    // pegando os demais elementos do HTML
    const soma = document.getElementById("+")
    const subtracao = document.getElementById("-")
    const divisao = document.getElementById("/")
    const multi = document.getElementById("*")
    const igual = document.getElementById("igual")
    const limpar = document.getElementById("limpar")
    let display = document.getElementById("display")
    //para realizar os cálculos
    var operador1 = null
    var operador2 = null
    var operacao = null
    let contador = 0
	let error = false

    //função para calcular expressão
    function calcularExpressao(expressao) {
        // Substitui todos os caracteres "x" por "*"
        expressao = expressao.replace(/x/g, "*");

        // Usa um try-catch para tratar erros de sintaxe da expressão
        try {
            return Function(`'use strict'; return ${expressao}`)();
        } catch (e) {
         error = "Erro!"
        }
    }

    // Aqui é o evento de todos os botões de 0 a 9 e da ordem de fazer a operação
    numeros.forEach(function(numero) {
        numero.addEventListener("click", function() {
            if (display.textContent.length < 15 + contador) {
                if (operacao == null) {
                    if (operador1 == null) {
                        operador1 = Number(numero.value)
                    } else {
                        operador1 = operador1 * 10 +Number(numero.value)
                    }
                    display.textContent += numero.value
                } else {
                    if (operador2 == null) {
                        operador2 = Number(numero.value)
                    } else {
                        operador2 = operador2 * 10 +Number(numero.value)
                    }
                    display.textContent += numero.value
                }
            }
        })
    })

    //colocando evento nos operadores
    multi.addEventListener("click", function() {
        operacao = "*"
        display.textContent += "x"
        contador = 15

    })
    divisao.addEventListener("click", function() {
        operacao = "/"
        display.textContent += "÷"
        contador = 15
    })
    subtracao.addEventListener("click", function() {
        operacao = "-"
        display.textContent += "-"
        contador = 15

    })
    soma.addEventListener("click", function() {
        operacao = "+"
        display.textContent += "+"
        contador = 15

    })

    // evento do botão de =
    igual.addEventListener("click", function() {
        let resultado = calcularExpressao(display.textContent);
        if(resultado !== "Erro de sintaxe!"){
            display.textContent = resultado;
            operador1 = resultado;
            operador2 = null;
            operação = null;
			contador = 0;
			} else {
			display.textContent = resultado;
			}
			})
			// evento do botão de limpar
limpar.addEventListener("click", function() {
    operador1 = null;
    operador2 = null;
    operacao = null;
    display.textContent = "";
    contador = 0;
})
})
