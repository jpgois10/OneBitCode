let numeroBase = prompt(
    "Bem vindo ao Robô da Tabuada\n" + "Digite um número: "
);

let resultado = 0;
let tabuada = "";

for (let i = 0; i <= 20; i++) {
    resultado = numeroBase * i;
    tabuada += numeroBase + " x " + i + " = " + resultado + "\n";
}

alert("Essa é a Tabuada de 1 a 20 do número " + numeroBase + "\n" + tabuada);
