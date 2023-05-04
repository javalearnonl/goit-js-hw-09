import Notiflix from 'notiflix';
const formEl = document.querySelector('form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;

  let delayTime = +delay.value;
  const stepTime = +step.value;
  const amountValue = +amount.value;

  for (let position = 1; position <= amountValue; position++) {
    createPromise(position, delayTime)
      .then(({ position, delayTime }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayTime}ms`
        );
      })
      .catch(({ position, delayTime }) => {
        Notiflix.Notify.failure(
          `❌ rejected promise ${position} in ${delayTime}ms`
        );
      });
    delayTime += stepTime;
  }
}

function createPromise(position, delayTime) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delayTime });
      } else {
        reject({ position, delayTime });
      }
    }, delayTime);
  });
}