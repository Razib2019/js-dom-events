// Option-01:Directly set on the html element
// <button onclick="console.log(65)">Another Button</button>

// Option-02: Add onclick function on the html element
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option-03:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// Option-03:Another
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// Option-04:
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// Option-04: Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})
// Option-04: Final
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})