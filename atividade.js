// const mesada = [5,10,15]

// mesada.map((mesada) => console.log(mesada * 2))

// let pontos = [3,7,10]

// pontos.map((pontos) => console.log(pontos + 5));

// const numeros = [1,2,3,4,5,,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// const teste = numeros.filter((numeros) => numeros %2 === 0);

// console.log(teste)

// const precos = [15,30,8,22,12]

// const teste = precos.filter((precos) => precos <= 20)

// console.log(teste);

// const colegas = ["josue","jose","joao","julia","joana"]

// colegas.forEach((colegas) => console.log(colegas + " - presente"));

// const figurinhas = ['leao', 'tigre', 'urso']

// const teste = figurinhas.forEach((figurinhas) => console.log(figurinhas + " - animal"));


// const lista = [1,2,3,4,5,6,7,8,9,10];

// const teste = lista.filter((lista) => lista %2 !== 0)
// console.log(teste)

// const test = lista.filter((lista) => lista %2 === 0).map((lista) => lista * 2) 

// console.log(test);

// const mochila1 = ['lápis', 'caderno']
// const mochila2 = ['boracha','regua']

// const teste = [...mochila1, ...mochila2]

// console.log(teste);

const heroi = { 
    nome: 'Raio Azul', poder: 'velocidade', nivel: '7'
}
 
const { nome, poder } = heroi

console.log(`${nome} tem o poder de ${poder}`)