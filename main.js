const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const ol = document.querySelector('ol')

for (let i = 0; i < 1; i++) {
    alphabet.push(i);
    var secretKey = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(`The secret key is ${secretKey}.`)
}

document.body.addEventListener('keypress', function(event) {
    pressed = event.key
    console.log(pressed)
    if (secretKey === pressed) {
        const h1 = document.createElement('li')
        h1.textContent = `SECRET KEY PRESSED ${secretKey}!`
        ol.appendChild(h1)
        console.log(h1)
        function reset() {
            secretKey = alphabet[Math.floor(Math.random()*alphabet.length)];
            console.log(`The secret key is ${secretKey}.`)
        }
        reset();
    }
})