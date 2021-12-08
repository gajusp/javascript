let primeNumEle = document.getElementById('primeNumInpt');
let primeNumBtn = document.getElementById('primeNumBtn');

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

primeNumBtn.addEventListener('click', () => {
  if (primeNumEle.value) {
    console.log(primeNumEle.value, ' - Prime Number - ', isPrime(Number(primeNumEle.value)));
  }
});
