// Recursion example

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}

var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4)); // 24
