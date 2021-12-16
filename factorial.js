let factorialNumEle = document.getElementById('factorialInpt');
let factorialNumBtn = document.getElementById('factorialBtn');

// factorial(n) = n*factorial(n−1)

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

factorialNumBtn.addEventListener('click', () => {
  if (factorialNumEle.value) {
    console.log(factorialNumEle.value, ' - Factorial result - ', factorial(Number(factorialNumEle.value)));
  }
});
