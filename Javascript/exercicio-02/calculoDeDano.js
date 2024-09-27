const primeiroPersonagem = prompt("Insira o nome do primeiro personagem: ");
const poderAtaquePrimeiro = parseFloat(prompt(`Insira o poder de ataque de ${primeiroPersonagem}: `));

const segundoPersonagem = prompt("Insira o nome do segundo personagem: ");
const pontosDeVidaSegundo = parseFloat(prompt(`Insira a quantidade de pontos de vida de ${segundoPersonagem}: `));
const poderDefesaSegundo = parseFloat(prompt(`Insira o poder de defesa de ${segundoPersonagem}: `));
const escudoSegundo = parseInt(prompt(`${segundoPersonagem} possui escudo? Digite o número de uma das opções: 1-Sim | 2-Não`));

let possuiEscudo = ""
if(escudoSegundo === 1) possuiEscudo = "Sim"
else if(escudoSegundo === 2) possuiEscudo = "Não"
else alert("Opção inválida. Tente novamente")


let dano = 0;

if(poderAtaquePrimeiro > poderDefesaSegundo && escudoSegundo === 2) 
    dano = poderAtaquePrimeiro - poderDefesaSegundo;
else if(poderAtaquePrimeiro > poderDefesaSegundo && escudoSegundo === 1)
    dano = (poderAtaquePrimeiro - poderDefesaSegundo)/2;

const danoFinal = pontosDeVidaSegundo - dano;

alert(`
    ${primeiroPersonagem}:
    Poder de ataque: ${poderAtaquePrimeiro}
    Dano causado: ${dano}
    
    ${segundoPersonagem}:
    Pontos de vida: ${danoFinal}
    Poder de defesa: ${poderDefesaSegundo}
    Possui escudo: ${possuiEscudo}
`);


