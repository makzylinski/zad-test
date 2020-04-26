const popup = document.querySelector('.popup');
const video = document.querySelector('.video');
const close = document.querySelector('.close');
const ytVid = document.querySelector('.yt-vid')

video.addEventListener('click', () => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw < 768) {
        popup.style.display = 'none';
    } else popup.style.display = 'block';
})

close.addEventListener('click', () => {
    ytVid.src = ytVid.src;
    popup.style.display = 'none';
})
