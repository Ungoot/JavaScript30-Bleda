const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`Error`, err);
    });
}
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.height = height;
  canvas.width = width;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16); // ~ 60FPS
};

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'screenshot');
  link.innerHTML = `<img src="${data}" alt="Screenshot" />`
  strip.insertBefore(link, strip.firstChild);
};

getVideo();

video.addEventListener('canplay', paintToCanvas);