const primeiroNome = prompt("Digite o primeiro nome do recruta");
const segundoNome = prompt("Digite o segundo nome do recruta");
const campoDeEstudo = prompt("Digite o campo de estudo do recruta");
const anoNascimento = prompt("Digite o ano de nascimento do recruta");

alert(
    "Recruta cadastrado:\n\n"+
    `Nome completo: ${primeiroNome} ${segundoNome}\n`+
    `Campo de estudo: ${campoDeEstudo}\n`+
    `Idade: ${2024 - anoNascimento} anos`
);