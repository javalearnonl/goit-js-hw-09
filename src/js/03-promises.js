import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const delay = +e.target.elements.delay.value;
  const step = +e.target.elements.step.value;
  const amount = +e.target.elements.amount.value;

  let position = 1;
  let shouldResolve;

  createPromise({ position, delay, shouldResolve })
    .then(handlePromise)
    .catch(handlePromise);

  function handlePromise({ position, delay, shouldResolve }) {
    const notifyFunction = shouldResolve
      ? Notiflix.Notify.success
      : Notiflix.Notify.failure;
    try {
      notifyFunction(`✅ ${shouldResolve ? 'Fulfilled' : 'Rejected'} promise ${position} in ${delay}ms`);
    } catch (error) {
      console.error('Error:', error);
    }
    if (position < amount) {
      position++;
      setTimeout(() => {
        shouldResolve = Math.random() > 0.3;
        createPromise({ position, delay, shouldResolve })
          .then(handlePromise)
          .catch(handlePromise);
      }, delay);
    }
  }

  e.target.reset();
});

function createPromise({ position, delay, shouldResolve }) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve ? resolve({ position, delay, shouldResolve }) : reject({ position, delay, shouldResolve });
    }, delay + (position - 1) * delay);
  });
  return promise;
}