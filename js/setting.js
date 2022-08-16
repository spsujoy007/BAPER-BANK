document.getElementById('submit-btn').addEventListener('click', function () {
    // console.log('Wow you are done')

    //input the value of email Part- 2
    const email = document.getElementById('user-email');
    const getEmail = email.value;

    // Input the value of password Part-3
    const password = document.getElementById('user-password');
    const getPassword = password.value;

    if (getEmail === 'takachor@gmail.com' && getPassword === '404') {
        window.alert('Login successful');
        window.location.href = 'bank.html';

    }
    else {
        window.alert('Invalid user! login failed. Try again')
        window.location.reload();
    }
})