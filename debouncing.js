let debouncingBtn = document.getElementById('debouncingBtn');

const debounce = (fn, wait, scope) => {
  let timeOutId;

  return function (...arg) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      fn.apply(scope, ...arg);
    }, wait);
  };
};

debouncingBtn.addEventListener(
  'click',
  debounce(
    () => {
      console.log('Debouncing button clicked');
    },
    2000,
    this
  )
);
