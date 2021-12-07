let throttlingBtn = document.getElementById('throttlingBtn');

const throttle = (fn, delay) => {
  let lastClick = 0;

  return (...arg) => {
    const now = new Date().getTime();

    if (now - lastClick < delay) {
      return;
    }

    lastClick = now;

    return fn(...arg);
  };
};

throttlingBtn.addEventListener(
  'click',
  throttle((e) => {
    console.log('Throttling button clicked');
  }, 5000)
);
