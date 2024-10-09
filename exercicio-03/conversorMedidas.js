const valorMetros = parseFloat(prompt("Insira o valor em metros para conversão"));

const unidadeConversao = parseInt(prompt(
    "Digite o número de uma das opções de medida para conversão:\n"+
    "1- milímetro (mm)\n"+
    "2- centímetro (cm)\n"+
    "3- decímetro (dm)\n"+
    "4- decâmetro (dam)\n"+
    "5- hectômetro (hm)\n"+
    "6- quilômetro (km)\n"
    ));

let resultado = 0;

switch(unidadeConversao){
    case 1:
        resultado = valorMetros * 1000;
        alert(`Resultado: ${valorMetros}m = ${resultado}mm`);
        break;
    case 2:
        resultado = valorMetros * 100;
        alert(`Resultado: ${valorMetros}m = ${resultado}cm`);
        break;
    case 3:
        resultado = valorMetros * 10;
        alert(`Resultado: ${valorMetros}m = ${resultado}dm`);
        break;
    case 4:
        resultado = valorMetros / 10;
        alert(`Resultado: ${valorMetros}m = ${resultado}dam`);
        break;
    case 5:
        resultado = valorMetros / 100;
        alert(`Resultado: ${valorMetros}m = ${resultado}hm`);
        break;
    case 6:
        resultado = valorMetros / 1000;
        alert(`Resultado: ${valorMetros}m = ${resultado}km`);
        break;
    default:
        alert("Opção inválida. Tente novamente");
}

