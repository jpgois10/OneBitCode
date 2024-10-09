let saldo = parseFloat(prompt(
    "Bem vindo ao sistema de Controle Financeiro.\n" +
        "Informe o saldo disponível: "
));
let movimentacaoDinheiro = 0.0;
let opcao = "";

do {
    opcao = prompt(
        "Você tem: R$" +
            saldo +
            "\nEscolha:\n" +
            "1 para adicionar dinheiro\n" +
            "2 para remover dinheiro\n" +
            "3 para sair do programa."
    );

    switch (opcao) {
        case "1":
            movimentacaoDinheiro = parseFloat(prompt(
                "Informe a quantidade de dinheiro a ser adicionada: R$"
            ));
            saldo += movimentacaoDinheiro;
            break;
        case "2":
            movimentacaoDinheiro = parseFloat(prompt(
                "Informe a quantidade de dinheiro a ser removida: R$"
            ));
            saldo -= movimentacaoDinheiro;
            break;
        case "3":
            alert("Sistema encerrado.");
            break;
        default:
            alert("Opcão Inválida.");
            break;
    }
} while (opcao !== "3");

