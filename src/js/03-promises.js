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

  createPromise({ position, delay })
    .then(handlePromise)
    .catch(handlePromise);

  function handlePromise({ position, delay }) {
    const shouldResolve = Math.random() > 0.3;
    const notifyFunction = shouldResolve
      ? Notiflix.Notify.success
      : Notiflix.Notify.failure;
    try {
      notifyFunction(`✅ ${ shouldResolve ? 'Fulfilled' : 'Rejected' } promise ${position} in ${delay + position * step}ms`);
    } catch (error) {
      console.error('Error:', error);
    }
    if (position < amount) {
      position++;
      setTimeout(() => {
        createPromise({ position, delay })
          .then(handlePromise)
          .catch(handlePromise);
      }, step);
    }
  }

  e.target.reset();
});

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });
  return promise;
}