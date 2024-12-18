let videoList = document.querySelectorAll(".video-list-container .list");

  videoList.forEach((vid) => {
    vid.onclick = () => {
      videoList.forEach((remove) => {
        remove.classList.remove("active");
      });
      vid.classList.add("active");

      let src = vid.querySelector(".list__video").src;
      let title = vid.querySelector(".list__title").innerHTML;

      document.querySelector(".main-video-container .main-video").src = src;
      document.querySelector(".main-video-container .main-video").play();
      document.querySelector(
        ".main-video-container .main-video__title"
      ).innerHTML = title;
    };
  });


  const video = document.getElementById('myVideo');
  const playButton = document.getElementById('playButton');
  const pauseButton = document.getElementById('pauseButton');
  const fullScreenButton = document.getElementById('fullScreenButton');

 
  function playVideo() {
    video.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline'; 
  }


  function pauseVideo() {
    video.pause();
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none'; 
  }


  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  
  playButton.addEventListener('click', playVideo);
  pauseButton.addEventListener('click', pauseVideo);
  fullScreenButton.addEventListener('click', toggleFullScreen);

 
  document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'VIDEO') {
      e.preventDefault();
    }
  });


  const seekBar = document.getElementById('seekBar');
  const timeDisplay = document.getElementById('timeDisplay');
  
  // Update seek bar and time display as video plays
  video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    const duration = video.duration;
  
    // Update the seek bar value
    seekBar.value = (currentTime / duration) * 100;
  
    // Update time display
    timeDisplay.textContent = formatTime(currentTime) + " / " + formatTime(duration);
  });
  
  // Jump to a specific time when seek bar is adjusted
  seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * video.duration;
    video.currentTime = seekTime;
  });
  
  // Helper function to format time in minutes and seconds
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  