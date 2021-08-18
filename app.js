function getId(id) {
    return document.getElementById(id);
}

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    getId('display-pin').value = pin;
}

getId('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const display = getId('display-typed');
    if (isNaN(number)) {
        if (number == 'C') {
            display.value = '';
        }
        else if (number == '<'){
            display.value = display.value.slice(0, -1);
        }
    }
    else {
        const previousDisplay = display.value;
        const newDisplay = previousDisplay + number;
        display.value = newDisplay;
    }
});

function verifyPin() {
    const pin = getId('display-pin').value;
    const display = getId('display-typed').value;
    const successMessage = getId('notify-success');
    const errorMessage = getId('notify-fail');
    if ( pin == display) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

}







