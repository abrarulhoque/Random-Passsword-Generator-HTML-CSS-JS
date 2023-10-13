const passwordBox = document.getElementById('passwordBox');
const copyIcon = document.getElementById('copyIcon');
const generateBtn = document.getElementById('generateBtn');

const length = 12;

function generateRandomPass(){
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars; 

    let password = '';
    for( let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * allChars.length);

        password +=allChars[randomIndex];
    }

    return password;

}

generateBtn.addEventListener("click", function(){
    passwordBox.value = generateRandomPass();
})

copyIcon.addEventListener("click", function(){
    passwordBox.select();
    document.execCommand('copy');
})
