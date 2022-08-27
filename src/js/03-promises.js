import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

const refs = {
  delayEl: formEl[0],
  stepEl: formEl[1],
  amountEl: formEl[2],
}

const { delayEl, stepEl, amountEl } = refs;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  let count = 0;
  let firstValue = Number(delayEl.value);
  let countInterval = setInterval(() => {
    if (count < amountEl.value) {
      count += 1;
      firstValue += Number(stepEl.value);
      createPromise(count, firstValue - Number(stepEl.value)).then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    } else {
      clearInterval(countInterval)
    }
  }, stepEl.value);
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
          if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay })
    }
    },delay)
  })
}



