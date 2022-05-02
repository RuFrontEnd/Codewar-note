// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculation = 0;
function fibonacci(n) {
  calculation++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
} // O(2^n)

console.log("fibonacci", fibonacci(4), "/ calculation", calculation);

let calculationFix = 0;
function fibonacciFix(n) {
  calculationFix++;
  let cache = {};
  return function fib(n) {
    if (n in cache) { // 同cache.n
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
} // O(n)

const closurefib = fibonacciFix();

console.log("closurefib", closurefib(4), "/ calculationFix", calculationFix);
