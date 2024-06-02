let clock = document.querySelector('#clock');
let button = document.querySelector('#button');
let istimeshown = false;


button.addEventListener('click', function (e) {
    istimeshown = !istimeshown;
    istimeshown ? timerOn() : timerOff();

});

function timer() {
    Time = new Date();
    let hour = Time.getHours().toString();
    let minute = Time.getMinutes().toString();
    let second = Time.getSeconds().toString();

    if (hour.length < 2) {
        hour = '0' + hour;
    }
    if (second.length < 2) {
        second = '0' + second;
    }
    if (minute.length < 2) {
        minute = '0' + minute;
    }
    clock.innerHTML = hour + ':' + minute + ':' + second;
    document.body.style.background = '#' + hour + minute + second;
    button.style.background = '#' + hour + minute + second;
}

function timerOn() {
    inteval = setInterval(timer, 1000);
}

function timerOff() {
    clearInterval(inteval);

    clock.innerHTML = '00:00:00'
    document.body.style.background = 'white'
    button.style.background = 'white'


}