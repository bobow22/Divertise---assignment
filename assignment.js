// Please use any language that you good at the most and write a function that accept input n and return the n-th element in Fibonacci sequence. While the Fibonacci Sequence is the series of numbers. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibo(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }

  let prev = 1;
  let curr = 1;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(fibo(10))
