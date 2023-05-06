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
    let erro = false

    //função para calcular expressão
    function calcularExpressao(expressao) {
        // Substitui todos os caracteres "x" por "*"
        expressao = expressao.replace(/x/g, "*")
        // Substitui todos os caracteres "÷" por "/"
        expressao = expressao.replace(/÷/g, "/")

        // Usa um try-catch para tratar erros de sintaxe da expressão
        try {
            return Function(`'use strict'; return ${expressao}`)();
        } catch (e) {
            throw new Erro("Operação errada!")
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
        if (operador1 != null && operador2 != null && operacao != null) {
            let resultado = calcularExpressao(`${operador1} ${operacao} ${operador2}`)
            operador1 = resultado
            operador2 = null
            operacao = "*"
            display.textContent = resultado + "*"
        } else if (operador1 != null && operacao == null) {
            operacao = "*"
            display.textContent += "*"
        }
    })
        soma.addEventListener("click", function() {
            if (operador1 != null && operador2 != null && operacao != null) {
                let resultado = calcularExpressao(`${operador1} ${operacao} ${operador2}`)
                operador1 = resultado
                operador2 = null
                operacao = "+"
                display.textContent = resultado + "+"
            } else if (operador1 != null && operacao == null) {
                operacao = "+"
                display.textContent += "+"
            }
        })
        
        subtracao.addEventListener("click", function() {
            if (operador1 != null && operador2 != null && operacao != null) {
                let resultado = calcularExpressao(`${operador1} ${operacao} ${operador2}`)
                operador1 = resultado
                operador2 = null
                operacao = "-"
                display.textContent = resultado + "-"
            } else if (operador1 != null && operacao == null) {
                operacao = "-"
                display.textContent += "-"
            }
        })
        
        divisao.addEventListener("click", function() {
            if (operador1 != null && operador2 != null && operacao != null) {
                let resultado = calcularExpressao(`${operador1} ${operacao} ${operador2}`)
                operador1 = resultado
                operador2 = null
                operacao = "/"
                display.textContent = resultado + "/"
            } else if (operador1 != null && operacao == null) {
                operacao = "/"
                display.textContent += "/"
            }
        })
        
        //evento do botão igual
        igual.addEventListener("click", function() {
            if (operador1 != null && operador2 != null && operacao != null) {
                let resultado = calcularExpressao(`${operador1} ${operacao} ${operador2}`)
                display.textContent = resultado
                operador1 = resultado
                operador2 = null
                operacao = null
                contador = display.textContent.length
            }
        })
        
        //evento do botão limpar
        limpar.addEventListener("click", function() {
            display.textContent = ""
            operador1 = null
            operador2 = null
            operacao = null
            contador = 0
        })        
    })