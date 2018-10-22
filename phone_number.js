window.onload = init;

// initialize the app
function init() {
    
    var generator = document.getElementById('generator');
    var clearBtn = document.getElementById('clear-btn');
    let numberInput = document.getElementById('numberInput');
    generator.addEventListener('click', generateNumbers);
    clearBtn.addEventListener('click', clearDisplay);
     numberInput.addEventListener('input', clearDisplay );
};

// show randon phone numbers
function generateNumbers() {
    var store = [];
    // var phoneDisplay = document.getElementsByClassName('phone-display')[0];
    var digits = [0,1,2,3,4,5,6,7,8,9];
    var num = '0';

    // user to input number of phone number they want to generate
    //var numberInput = document.getElementById('numberInput')
    
    // get 9 random digits from the array and append to num.
    for(var j=0; j <10; j++) {
        //index in digits
        for(var i=0; i<=8; i++) {
            var digit = digits[Math.floor(Math.random() * digits.length)];
            num = num + digit;
        }
        if(store.includes(num) === false) {//this will check if the number exist or not (you can also use indexOf )
            store.push(num);    // push number to store
            num = '0';     // reverse number to zero
            console.log('pushed');

        }
    }
    // for(var i=0; i<=8; i++) {
    //     var digit = digits[Math.floor(Math.random() * digits.length)];
    //     num = num + digit;
    // }
    
    // if(store.indexOf(num) === -1) {
    //     store.push(num);    // push number to store
    //     num = '0';     // reverse number to zero
    //     // console.log('pushed');
    // }

    showNumbers(store);
    // phoneDisplay.innerHTML = store;

    console.table(store)
}

// show the number in html
function showNumbers(store) {
    var phoneDisplay = document.getElementsByClassName('phone-display')[0];
    for(var i=0; i<store.length; i++) {
        var newList = document.createElement('li')
        newList.setAttribute('class', 'list-group-item');
        if(store[i].length > 1)
            newList.innerHTML =`Tel - ${store[i]}`;
        phoneDisplay.appendChild(newList);
    }

}

// clear the display
function clearDisplay() {
    var phoneDisplay = document.getElementsByClassName('phone-display')[0];
    let numberInput = document.getElementById('numberInput')[0];
    phoneDisplay.innerHTML = '';
   // numberInput.innerHTML = '';
     
}
