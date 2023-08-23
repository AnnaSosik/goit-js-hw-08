import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

let feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInputData, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

const { email, message } = feedbackForm.elements;
reloadPage();

function onInputData() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();
  dataForm = {};
}
