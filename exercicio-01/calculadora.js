const numeroA = parseFloat(prompt("Insira o primeiro número"));
const numeroB = parseFloat(prompt("Insira o segundo número"));

const soma = numeroA + numeroB
const subtracao = numeroA - numeroB
const multiplicacao = numeroA * numeroB
const divisao = numeroA / numeroB

alert(
    `O resultado da soma dos números é: ${soma}\n`+
    `O resultado da subtração dos números é: ${subtracao}\n`+
    `O resultado da multiplicação dos números é: ${multiplicacao}\n`+
    `O resultado da divisão dos números é: ${divisao}\n`
);