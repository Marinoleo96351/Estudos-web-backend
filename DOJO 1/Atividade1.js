
// Desafio: Mini Processador de Dados - Node.js
// Executar: node Atividade1.js

const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];
 
// Auxiliar reutilizada em todas as partes
const totalCompras = (usuario) => usuario.compras.reduce((soma, valor) => soma + valor, 0);
 
// - Parte 1  - Total de compras por usuário 
console.log("--- Parte 1: total de compras ---");
usuarios.forEach((u) => console.log(`${u.nome}: total = ${totalCompras(u)}`));
 
// - Parte 2 - Usuários ativos 
console.log("\n--- Parte 2: usuários ativos ---");
const ativos = usuarios.filter((u) => u.ativo);
ativos.forEach((u) => console.log(u.nome));
 
// - Parte 3 - Maiores de idade 
console.log("\n--- Parte 3: maiores de idade ---");
const maioresDeIdade = usuarios.filter((u) => u.idade >= 18);
maioresDeIdade.forEach((u) => console.log(u.nome));
 
// - Parte 4 - Maior volume de compras
console.log("\n--- Parte 4: maior volume de compras ---");
const maiorComprador = usuarios.reduce(
  (maior, atual) => (totalCompras(atual) > totalCompras(maior) ? atual : maior)
);
console.log(`Usuário com maior volume: ${maiorComprador.nome}`);
console.log(`Total: ${totalCompras(maiorComprador)}`);
 
// - Parte 5 - Coerção de tipos 
console.log("\n--- Parte 5: coerção de tipos ---");
console.log("5" + 2);      // "52"
console.log("5" - 2);      // 3
console.log(true + 1);     // 2
console.log(false == 0);   // true
console.log(false === 0);  // false
 
// - Parte 6 - Arrow function x function 
console.log("\n--- Parte 6: this ---");
const pessoaFuncao = {
  nome: "Maria",
  falar: function () {
    console.log(this.nome);
  }
};
pessoaFuncao.falar(); // Maria
 
const pessoaArrow = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
  }
};
pessoaArrow.falar(); // undefined
 
// - Parte 7 - Relatório
const gerarRelatorio = (lista) => {
  const ativosLista = lista.filter((u) => u.ativo);
  const somaIdades = lista.reduce((soma, u) => soma + u.idade, 0);
  const topo = lista.reduce(
    (maior, atual) => (totalCompras(atual) > totalCompras(maior) ? atual : maior)
  );
 
  return {
    totalUsuarios: lista.length,
    usuariosAtivos: ativosLista.length,
    usuariosInativos: lista.length - ativosLista.length,
    mediaIdade: Number((somaIdades / lista.length).toFixed(1)),
    maiorComprador: topo.nome
  };
};
 
console.log("\n--- Parte 7: relatório ---");
console.log(gerarRelatorio(usuarios));
 
//  Desafio extra 
const gerarRelatorioExtra = (lista) => {
  const maisJovem = lista.reduce((menor, atual) => (atual.idade < menor.idade ? atual : menor));
  const maisVelho = lista.reduce((maior, atual) => (atual.idade > maior.idade ? atual : maior));
  const somaTotal = lista.reduce((soma, u) => soma + totalCompras(u), 0);
 
  return {
    maisJovem: maisJovem.nome,
    maisVelho: maisVelho.nome,
    mediaComprasPorUsuario: Number((somaTotal / lista.length).toFixed(2))
  };
};
 
console.log("\n--- Desafio extra ---");
console.log(gerarRelatorioExtra(usuarios));
 