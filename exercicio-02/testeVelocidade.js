const nomeVeiculoA = prompt("Insira o nome do primeiro veículo:");
const velocidadeVeiculoA = parseFloat(
    prompt("Insira a velocidade em km/h do primeiro veículo:")
);

const nomeVeiculoB = prompt("Insira o nome do segundo veículo:");
const velocidadeVeiculoB = parseFloat(
    prompt("Insira a velocidade em km/h do segundo veículo:")
);

if (velocidadeVeiculoA > velocidadeVeiculoB)
    alert(`O veículo ${nomeVeiculoA} com velocidade ${velocidadeVeiculoA}km/h é mais rápido do que ${nomeVeiculoB}.`);
else if (velocidadeVeiculoA < velocidadeVeiculoB)
    alert(`O veículo ${nomeVeiculoB} com velocidade ${velocidadeVeiculoB}km/h é mais rápido do que ${nomeVeiculoA}.`);
else
    alert("A velocidade dos veículos são iguais.");
