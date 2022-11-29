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



Method 2


let count = 0;
function search(query){
   // some api call
   console.log("result",count++)}const magicFunction = debounce(search,300);function debounce(func, delay){
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}document.querySelector(".search").addEventListener("input",(e)=>{
  magicFunction(e.target.value);
});
