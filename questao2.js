function fibonacci(n) {
  if (n < 1) return 0;
  else if (n === 1 || n === 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

function isFibonacciSequence(n) {
  for (let i = 1; i <= n; i++) {
    if (fibonacci(i) === n) return true;
  }
  return false;
}

const numeroDigitado = parseInt(prompt("Digite um número: "));
const isFibonacci = isFibonacciSequence(numeroDigitado);

if (isFibonacci)
  console.log(`${numeroDigitado} pertence à sequência de Fibonacci.`);
else console.log(`${numeroDigitado} não pertence à sequência de Fibonacci.`);
