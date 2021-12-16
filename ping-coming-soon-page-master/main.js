const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInput();
});

const setError = (element, message) => {
    const errorDisplay = document.querySelector('#error');

    errorDisplay.innerText = message;
    element.classList.add('error');
    element.classList.remove('success');
};

const setSuccess = (element) => {
    const errorDisplay = document.querySelector('#error');

    errorDisplay.innerText = '';
    element.classList.add('success');
    element.classList.remove('error');
};

const isValidEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(String(email).toLowerCase());
};

const validateInput = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please provide a valid email address');
    } else {
        setSuccess(email);
    }
};
