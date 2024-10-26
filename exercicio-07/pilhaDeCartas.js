// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let opcaoMenu = "";
const baralho = [];

do {
    opcaoMenu = prompt(
        "Quantidade atual de cartas no baralho: " +
            baralho.length +
            "\n\nQual opção deseja escolher?\n" +
            "1- Adicionar carta\n" +
            "2- Puxar uma carta\n" +
            "3- sair\n"
    );

    switch (opcaoMenu) {
        case "1":
            let adicionarCarta = prompt("Informe o nome da carta: ");
            baralho.unshift(adicionarCarta);
            alert("Carta " + adicionarCarta + " adicionada no topo do baralho");
            break;
        case "2":
            if (baralho.length > 0){
                alert("Carta puxada: " + baralho[0]);
                baralho.shift();
            } else {
                alert("Nenhuma carta no baralho.")
            }
            break;
        case "3":
            alert("Programa encerrado");
            break;
        default:
            alert("Opção inválida.");
    }
} while (opcaoMenu != 3);
