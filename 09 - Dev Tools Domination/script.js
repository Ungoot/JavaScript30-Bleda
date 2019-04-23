const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('Hello world');
// Interpolated
console.log('Hello %s world', 'my');
// Styled
console.log('%cI am a great text', 'font-size: 20px; color: red; text-shadow: 1px 1px 0 black');
// warning!
console.warn('I am warning you!');
// Error :|
console.error('He\'s dead Jim.');
// Info
console.info('I am the one who knocks');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('hi'), 'WRONG!');
// Clearing
console.clear();
// Viewing DOM Elements
// Grouping together
// Counting
// Timing