import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = feedbackForm.querySelector('input');
const textareaMessage = feedbackForm.querySelector('textarea');
const buttonForm = feedbackForm.querySelector('button');

const LOCALSTORAGE_KEY = 'feedback-form-state';

let newObj = {};

feedbackForm.addEventListener(
    'input',
    throttle(() => {
      newObj.email = inputEmail.value;
      newObj.message = textareaMessage.value;
  
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newObj));
    }, 500)
  );
  
  function updateOutput() {
    try {
      const parsedSettings = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      inputEmail.value = parsedSettings.email || '';
      textareaMessage.value = parsedSettings.message || '';
    } catch {}
  }
  
  feedbackForm.addEventListener('submit', evt => {
    evt.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    inputEmail.value = '';
    textareaMessage.value = '';
    console.log(newObj);
  });