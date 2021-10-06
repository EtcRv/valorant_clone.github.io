const headerBtn = document.querySelector('.header_btn');
const playBtn = document.querySelector('.trailer_btn');
const playNow = document.querySelector('.play_now')
const closePlayNow = document.querySelector('.play_now-inner-close-btn')
const videoPlay = document.querySelector('.about-us-video-trailer-img')
const videoPlayLink = document.querySelector('.about-us-main-content-link')
const videoTeaserPlay = document.querySelector('.video_teaser_play')
const closeVideoBtn = document.querySelector('.teaser_play-close-btn')


function ChangePlayNow() {
    playNow.classList.toggle('active')
}

function ChangeVideoPlay(){
    videoTeaserPlay.classList.toggle('play');
}

function CloseVideoPlay(){
    videoTeaserPlay.classList.remove('play');
    videoTeaserPlay.stop()
    videoTeaserPlay.currentTime = 0

}

headerBtn.addEventListener('click', ChangePlayNow );
playBtn.addEventListener('click', ChangePlayNow);
closePlayNow.addEventListener('click', ChangePlayNow);
videoPlay.addEventListener('click', ChangeVideoPlay);
videoPlayLink.addEventListener('click', ChangeVideoPlay);
closeVideoBtn.addEventListener('click',CloseVideoPlay);