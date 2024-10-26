// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let opcaoMenu = "";
let listaPacientes = [];

do {
    let filaAtualizada = "";

    for (let i = 0; i < listaPacientes.length; i++) {
        const paciente = listaPacientes[i];
        filaAtualizada += i + 1 + "º" + " " + paciente + "\n";
    }

    opcaoMenu = prompt(
        "Pacientes:\n" +
            (filaAtualizada || "Nenhum paciente na fila\n") +
            "\nQual opção deseja escolher?\n" +
            "1- Novo paciente\n" +
            "2- Consultar paciente\n" +
            "3- Sair\n"
    );

    switch (opcaoMenu) {
        case "1":
            novoPaciente = prompt(
                "Informe o nome do paciente a ser adicionado na fila: "
            );
            listaPacientes.push(novoPaciente);

            alert("Paciente adicionado com sucesso!");
            break;

        case "2":
            if (listaPacientes.length > 0) {
                alert("Consultando paciente " + listaPacientes[0]);
                listaPacientes.shift();
            } else {
                alert("Sem pacientes na fila.");
            }
            break;
        case "3":
            alert("Programa encerrado");
            break;
        default:
            alert("Opção inválida.");
    }
} while (opcaoMenu != 3);
