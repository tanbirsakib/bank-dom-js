document.getElementById('submit-button').addEventListener('click', function(){
    const userEmailField = document.getElementById('user-email')
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    if(userEmail === 'iamtsakib@gmail.com' && userPassword === '773466'){
       window.location.href = 'banking.html';
    } else {
        console.log('unvalid user');
    }
})