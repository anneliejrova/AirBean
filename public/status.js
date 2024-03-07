const countdown = document.querySelector('#countdown')

const startCountdown = (minutes) => {
    let counter = minutes;

    const interval = setInterval(() => {
        if (counter == 0) {
            clearInterval(interval);
        }

        countdown.innerHTML = `<b>${counter}</b> minutes`;
        counter--;
    }, 1000);

}

startCountdown(30)


