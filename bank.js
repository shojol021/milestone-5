// ==================================== Login ===========================================

document.getElementById('btn-login').addEventListener('click', function () {

    const email = document.getElementById('email-field').value;
    console.log(email);

    const password = document.getElementById('password-field').value;
    console.log(password);

    if (email === 'admin@gmail.com' && password === 'admin') {
        window.location.href = "vault.html";

    }

    else {
        alert('Please try again with correct username and password')
    }

})