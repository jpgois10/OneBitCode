let palavra = prompt(
    "Verificador de Palíndromos\n" + "Digite a palavra a ser verificada"
);

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavraInvertida === palavra)
    alert(
    "A palavra " + palavra + " é um Palíndromo\n");
else
alert(
    "A palavra " + palavra + " não é um Palíndromo\n" +
    palavraInvertida.toLowerCase() + " ≠ " + palavra.toLowerCase()
);
