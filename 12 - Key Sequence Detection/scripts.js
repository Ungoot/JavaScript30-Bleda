const pressed = [];
const secretCode = 'bleda';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);
})