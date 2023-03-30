
// # Exercício 1

// Uma pessoa analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47
// ```
const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]


for (let i = 0; i <array.length; i++){
    console.log(`Jogador ${[i+1]}: ${array[i]}`)
    
}
console.log('---------------------------------------------------------')

const atacantes = [
    ["Atacante A", [10, 5, 8, 12, 15]],
    ["Atacante B", [20, 17, 21, 19, 23]],
    ["Atacante C", [7, 8, 6, 10, 12]],
    ["Atacante D", [14, 15, 16, 13, 11]],
    ["Atacante E", [9, 11, 13, 8, 10]]
];

for(let i = 0; i < atacantes.length; i++){
    let jogador = (atacantes[i][0])
    let gol =(atacantes[i][1].join( " , "))
    console.log(`${jogador} = ${gol}`)
    
    
}

for(let atacante of atacantes){
    //console.log(atacante[1])

}