import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');

const currentInput = {
  email: emailField.value,
  message: messageField.value,
};

const checkStorage = () => {
  const storedInput = localStorage.getItem('feedback-form-state');
  if (storedInput) {
    const { email, message } = JSON.parse(storedInput);
    emailField.value = email;
    messageField.value = message;
  }
};
window.addEventListener('load', checkStorage);

const handleInput = () => {
  currentInput.email = emailField.value;
  currentInput.message = messageField.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(currentInput));
};

form.addEventListener('input', throttle(handleInput, 500));

const handleSubmit = e => {
  e.preventDefault();
  if (emailField.value === '' || messageField.value === '') {
    return alert(`Please fill in all required fields.`);
  } else {
    console.log(currentInput);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
};
form.addEventListener('submit', handleSubmit);
