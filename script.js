function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function palindromeChecker() {
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    const funnyMessages = [
        "Did your keyboard fall asleep?",
        "Even ghosts type more than this",
        "Nada. Zip. Zilch. Enter something!",
        "Don’t be shy — type away!",
        "Your invisible message was received!",
        "Input not found! Try speaking louder to your screen",
        "I can’t read minds...yet",
        "Is this a test of silence?",
        "The text box is on a diet — feed it something!"
    ];

    if (inputText.value === '') {
        const randomIndex = Math.floor(Math.random() * funnyMessages.length);
        result.textContent = funnyMessages[randomIndex];
    }
    else if (isPalindrome(inputText.value)) {
        result.textContent = `"${inputText.value}" is a Palindrome`;
    }
    else {
        result.textContent = `"${inputText.value}" is not a Palindrome`;
    }

    result.classList.add('fadeIn');
    inputText.value = '';
}

document.getElementById('checkButton').addEventListener('click', palindromeChecker);