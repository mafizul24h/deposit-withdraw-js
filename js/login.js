document.getElementById('login-btn').addEventListener('click', function () {
    // console.log('Login');s
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPass = document.getElementById('user-pass');
    const password = userPass.value;

    if (email === 'john@gmail.com' && password === '123456') {
        window.location.href = 'bank.html'
    } else {
        alerts('Invalid User');
    }
})