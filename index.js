const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("date");

form.addEventListener('submit', inputbox => {
    inputbox.preventDefault();

    validateInputs();
});

// function inputbox() {
//     preventDefault();
//     validateInputs();

// };

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const dateValue = date.value.trim();

    if (usernameValue === '') {
        setError(username, 'username is required');
    }

    if (emailValue === '') {
        setError(email, 'email is required');
    }else if (!isValidEmail(emailValue)) {
        setError(email, "provide valid email address");
    }

    if (passwordValue === '' ) {
        setError(password, 'password is required');
    }else if (passwordValue.length < 8 ) {
        setError(password, 'password must be at least 8 character.')
    }

    if (dateValue === '') {
        setError(date, 'isi anjing')
    }
};