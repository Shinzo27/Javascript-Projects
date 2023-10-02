const countdown = document.querySelector('.countdown');

const interval = setInterval(() => {
    const deadline = new Date(2023,9,20,7, 0, 0);

    const current = new Date();

    const diff = deadline - current;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
        <div data-content = "Days">${days}</div>
        <div data-content = "Hours">${hours}</div>
        <div data-content = "Minutes">${minutes}</div>
        <div data-content = "Seconds">${seconds}</div>
    `;

    if (diff < 0) {
        clearInterval(interval);
        countdown.innerHTML = "<h1>Here We Go</h1>";
    }
    
    document.querySelector('.reset').addEventListener('click', () => {
        clearInterval(interval);
        const divs = document.querySelectorAll('.countdown div');
        divs.forEach(div => {
            div.innerHTML = "00";
        })
    })
    
}, 1000);



