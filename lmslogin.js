let form = document.getElementById("login-form");
let usernameEl = document.getElementById("username");
let passwordEl = document.getElementById("password");
let usernameEr = document.getElementById("username-error");
let passwordEr = document.getElementById("password-error");

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    if (usernameEl.value === ''){
        usernameEr.innerText = "Please enter your email or username";
        usernameEr.style.display ="block";

    }else{
        usernameEr.style.display='none';
    }
    if (passwordEl.value === ''){
        passwordEr.innerText = 'please enter your password';
        passwordEr.style.display = "block";

    }else{
        passwordEr.style.display = 'none';
    }
    if (usernameEl.value !== '' && passwordEl.value !==''){

        alert('Login successfull');
        form.reset()
    }
});