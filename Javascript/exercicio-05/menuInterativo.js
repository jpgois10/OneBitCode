let opcaoMenu = "";

do {
    opcaoMenu = prompt(
        "Qual opção deseja escolher?\n" +
            "1- opção 1\n" +
            "2- opção 2\n" +
            "3- opção 3\n" +
            "4- sair\n"
    );

    switch (opcaoMenu) {
        case "1":
            alert("Você escolheu a opção 1");
            break;
        case "2":
            alert("Você escolheu a opção 2");
            break;
        case "3":
            alert("Você escolheu a opção 3");
            break;
        case "4":
            alert("Programa encerrado.");
            break;
        default:
            alert("Opção inválida");
    }
} while (opcaoMenu != 4);

