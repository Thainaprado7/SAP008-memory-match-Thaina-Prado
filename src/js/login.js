let input = document.querySelector('.login-input');
let button = document.querySelector('.login-button');
let form = document.querySelector('.login-form-tdm')

let validateInput = ({target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

let handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);