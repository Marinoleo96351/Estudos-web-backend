// operacoes.js
// Cada função tem dois comportamentos:
// - chamada com "a" e "b"  -> calcula e devolve o resultado (comportamento "POST")
// - chamada sem argumentos -> devolve a mensagem da rota (comportamento "GET")

const adicao = (a, b) => {
  if (a === undefined || b === undefined) {
    return "Você esta na rota adição";
  }
  return a + b;
};

const subtracao = (a, b) => {
  if (a === undefined || b === undefined) {
    return "Você esta na rota subtração";
  }
  return a - b;
};

const multiplicacao = (a, b) => {
  if (a === undefined || b === undefined) {
    return "Você esta na rota multiplicação";
  }
  return a * b;
};

const divisao = (a, b) => {
  if (a === undefined || b === undefined) {
    return "Você esta na rota divisão";
  }
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
};

module.exports = { adicao, subtracao, multiplicacao, divisao };
