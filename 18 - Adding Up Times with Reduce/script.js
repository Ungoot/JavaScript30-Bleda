let timeNodes = document.querySelectorAll('[data-time]'); //Not an array
timeNodes = Array.from(timeNodes); //Now an array
const seconds = timeNodes.map(node => node.dataset.time); //New seconds array

console.log(seconds);