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

  createPromise()
    .then(handlePromise)
    .catch(handlePromise);

  function handlePromise(shouldResolve) {
    const notifyFunction = shouldResolve
      ? Notiflix.Notify.success
      : Notiflix.Notify.failure;
    try {
      notifyFunction(`✅ ${ shouldResolve ? 'Fulfilled' : 'Rejected' } promise ${position} in ${delay + (position - 1) * step}ms`);
    } catch (error) {
      console.error('Error:', error);
    }
    if (position < amount) {
      position++;
      setTimeout(() => {
        createPromise()
          .then(handlePromise)
          .catch(handlePromise);
      }, step || 0);
    }
  }

  e.target.reset();
});

function createPromise() {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    shouldResolve
      ? resolve(shouldResolve)
      : reject(shouldResolve);
  });
  return promise;
}