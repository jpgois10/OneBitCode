const nomeTurista = prompt("Informe seu nome:");

let visitaCidades = prompt("Você já visitou alguma cidade?(Sim / Não)").toLowerCase();

let qntCidades = 0;
let cidades = [];

while (visitaCidades === "sim"){

    const nomeCidade = prompt("Informe o nome da cidade visitada:");
    cidades.push(nomeCidade);
    qntCidades ++;
    visitaCidades = prompt("Você já visitou outra cidade?(Sim / Não)").toLowerCase();

}

alert(
    "Nome: " + nomeTurista +
    "\nQuantidade de cidades visitadas: " + qntCidades +
    "\nLista das cidades: " + cidades
)
