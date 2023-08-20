import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form');
const inputEmail = formFeedback.querySelector('input');
const textareaMessage = formFeedback.querySelector('textarea');
const buttonForm = formFeedback.querySelector('button');

const LOCALSTORAGE_KEY = 'feedback-form-state';

let newObj = {};
