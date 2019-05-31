const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':');
    console.log(mins, secs);
  });