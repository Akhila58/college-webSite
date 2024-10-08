document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('showLogin').classList.add('active');
    document.getElementById('showRegister').classList.remove('active');
});

document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('showRegister').classList.add('active');
    document.getElementById('showLogin').classList.remove('active');
});
