// Step 01: add click event handler with the submit code 
document.getElementById('btn-submit').addEventListener('click',function(){

    // Step 02: get the email address inside the email input field
    // a. Always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 03: get password
    // a. set id in html
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    /******Danger******/
    // Do not verify email password on the client side
    // Step 04: verify email and password
    if(email === 'baaper@bank.com' && password === 'secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
});