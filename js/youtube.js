let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('stm-video', {
    height: '360',
    width: '640',
    videoId: 'F2GL45MTUP0',
    playerVars: {
      rel: '0',
      autoplay: '0',
      controls: '1'
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function stopVideo() {
  player.stopVideo();
}

function setVideo(id) {
  player.loadVideoById(id);
}

function setVolume(vol) {
  player.setVolume(vol);
}