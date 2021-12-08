let throttlingBtn = document.getElementById('throttlingBtn');

const throttle = (fn, threshold, scope) => {
  let lastClick = 0;

  return (...arg) => {
    const now = new Date().getTime();

    if (now - lastClick < threshold) {
      return;
    }

    lastClick = now;

    return fn.apply(scope, ...arg);
  };
};

throttlingBtn.addEventListener(
  'click',
  throttle(
    () => {
      console.log('Throttling button clicked');
    },
    5000,
    this
  )
);
