let _svOptions = {
    play: {
        icon: '<svg width="10" aria-hidden="true" focusable="false" data-icon="play" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>',
        show: true,
        color: '',
    },
    pause: {
        icon: '<svg width="10" aria-hidden="true" focusable="false" data-icon="pause" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>',
        show: true,
        color: '',
    },
    stop: {
        icon: '<svg width="10" aria-hidden="true" focusable="false" data-icon="stop" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>',
        show: true,
        color: '',
    },
    mute: {
        icon: '<svg width="10" aria-hidden="true" focusable="false" data-icon="volume-mute" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>',
        show: true,
        color: '',
    },
    volume: {
        icon: '<svg width="10" aria-hidden="true" focusable="false" data-icon="volume-up" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>',
        show:  true,
        color: '',
        value: 0.5,
    },
    progress: {
        icon: '',
        show: true,
        color: '',
        background: '',
    },
    fullscreen: {
        icon: '<svg width="10" aria-hidden="true" focusable="false" data-icon="expand" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path></svg>',
        show: true,
        color: '',
    },
    zoom: {
        icon: '<svg width="10" aria-hidden="true" focusable="false" data-icon="search-plus" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"></path></svg>',
        show: true,
        color: '',
    },
    clickPlayPause: false,
    backgroundColor: 'rgba(55, 55, 55, 0.5)',
    color: 'white',
    minWidth: 500,
    minHeight: 30,
    showOnHover: true,
    loop: false,
    autoplay: false,
    muted: false
};

function svControls(videoElement, options = {showOnHover: false}) {
    Object.keys(options).forEach(function(key) {
        _svOptions[key] = options[key];
    });

    options = _svOptions;

    if (typeof videoElement === 'string') {
        videoElement = document.getElementById(videoElement);
    }
    videoElement.classList.add('scvVideo');

    if (options.loop) {
        videoElement.loop = options.loop;
    }

    if (options.autoplay) {
        videoElement.autoplay = options.autoplay;
    }

    if (options.muted) {
        videoElement.muted = options.muted;
    }

    if (options.volume.value != null) {
        videoElement.volume = options.volume.value;
    }

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('svcContainer');
    const videoControls = document.createElement('div');
    videoControls.classList.add('svcControls');

    if (options.showOnHover) {
        videoControls.classList.add('svcControlsHidden');
    }

    if (options.backgroundColor) {
        videoControls.style.background = options.backgroundColor;
    }

    if (options.color) {
        videoControls.style.color = options.color;
    }

    let btnClass = 'svcBtn';

    const playBtn = newBtn(options.play.icon, btnClass);
    playBtn.setAttribute('data-state', 'play');
    playBtn.onclick = () => handlePause();

    const pauseBtn = newBtn(options.pause.icon, btnClass);
    pauseBtn.setAttribute('data-state', 'pause');
    pauseBtn.onclick = () => handlePause();

    if (videoElement.autoplay) {
        videoControls.setAttribute('data-state', 'paused');
    }

    function handlePause() {
        let videoPaused = videoElement.paused || videoElement.ended;
        let action = videoPaused ? videoElement.play() : videoElement.pause();
        videoControls.setAttribute('data-state', videoPaused ? 'paused' : '');
    }

    videoElement.onclick = function() {
        if (options.clickPlayPause) {
            handlePause();
        }
    };

    videoElement.onended = function () {
        if (videoElement.loop) {
            return;
        }
        videoControls.setAttribute('data-state', '');
    };

    const stopBtn = newBtn(options.stop.icon, btnClass);
    stopBtn.setAttribute('data-state', 'stop');
    stopBtn.onclick = function(e) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoControls.setAttribute('data-state', '');
    };

    const volumeDiv = document.createElement('div');
    volumeDiv.innerHTML = options.volume.icon;
    volumeDiv.classList.add('verticalSlider');
    volumeDiv.onclick = function(e) {
        if (e.target === volumeSlider) {
            return;
        }
        volumeDiv.setAttribute('data-state', videoElement.muted ? 'unmute' : 'mute');
        videoElement.muted = !videoElement.muted;
        if (videoElement.muted) {
            volumeSlider.value = 0;
        } else {
            volumeSlider.value = volume;
        }
    };

    const volumeSlider = document.createElement('input');
    let volume = videoElement.volume;
    volumeSlider.setAttribute('type', 'range');
    //volumeSlider.setAttribute('orient', 'vertical');
    volumeSlider.setAttribute('min', 0);
    volumeSlider.setAttribute('max', 1);
    volumeSlider.setAttribute('step', 0.1);
    volumeSlider.value = videoElement.muted ? 0 : videoElement.volume;
    volumeSlider.onchange = function(e) {
        volume = event.target.value
        videoElement.volume = volume;
        volumeDiv.setAttribute('data-state', 'unmute');
        videoElement.muted = false;
    };

    volumeDiv.prepend(volumeSlider);

    let zoom = 1;

    const zoomDiv = document.createElement('div');
    zoomDiv.innerHTML = options.zoom.icon;
    zoomDiv.classList.add('verticalSlider');
    zoomDiv.onclick = function (e) {
        if (e.target === zoomSlider) {
            return;
        }

        zoom = 1;
        videoElement.style.transform = 'scale(' + zoom + ')';
        zoomSlider.value = zoom;

        videoElement.style.left = '0';
        videoElement.style.top = '0';
    }

    const zoomSlider = document.createElement('input');
    zoomSlider.setAttribute('type', 'range');
    //zoomSlider.setAttribute('orient', 'vertical');
    zoomSlider.setAttribute('min', 1);
    zoomSlider.setAttribute('max', 3);
    zoomSlider.setAttribute('step', 0.1);
    zoomSlider.value = zoom;
    zoomSlider.onchange = function(e) {
        zoom = event.target.value
        videoElement.style.transform = 'scale(' + zoom + ')';

        if (zoom < 2) {
            videoElement.style.left = '0';
            videoElement.style.top = '0';
        }
    };

    zoomDiv.prepend(zoomSlider);

    const fullscreenBtn = newBtn(options.fullscreen.icon, btnClass);
    fullscreenBtn.setAttribute('data-state', 'go-fullscreen');
    fullscreenBtn.onclick = function() {
        if (!!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            videoContainer.setAttribute('data-fullscreen', false);
        } else {
            if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
            else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
            else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
            else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
            videoContainer.setAttribute('data-fullscreen', true);
        }
    };

    const btnArea1 = document.createElement('div');

    if (options.play.show !== false) {
        btnArea1.append(playBtn);
    }
    if (options.pause.show !== false) {
        btnArea1.append(pauseBtn);
    }
    if (options.stop.show !== false) {
        btnArea1.append(stopBtn);
    }

    btnArea1.classList.add('svcBtnArea');

    const btnArea2 = document.createElement('div');

    if (options.volume.show !== false) {
        btnArea2.append(volumeDiv);
    }
    if (options.zoom.show !== false) {
        btnArea2.append(zoomDiv);
    }
    if (options.fullscreen.show !== false) {
        btnArea2.append(fullscreenBtn);
    }

    btnArea2.classList.add('svcBtnArea');

    const progressDiv = document.createElement('div');
    progressDiv.classList.add('svcProgressDiv');

    const progress = document.createElement('input');
    progress.setAttribute('type', 'range');
    progress.classList.add('svcProgress');
    progress.onchange = function(e) {
        videoElement.currentTime = e.target.value;
    };

    videoElement.currentTime = 0;
    progress.value = videoElement.currentTime;

    videoElement.onloadedmetadata = function() {
        progress.setAttribute('max', videoElement.duration);

        if (videoElement.mozHasAudio ||
            Boolean(videoElement.webkitAudioDecodedByteCount) ||
            Boolean(videoElement.audioTracks && videoElement.audioTracks.length)
        ) {
            volumeDiv.classList.add('scvNoAudio');
        }
    };

    videoElement.ontimeupdate = function() {
        if (!progress.getAttribute('max')) progress.setAttribute('max', videoElement.duration);
        progress.value = videoElement.currentTime;
    };

    progressDiv.append(progress);

    if (options.play.show !== false || options.pause.show !== false || options.stop.show !== false) {
        videoControls.append(btnArea1);
    }

    if (options.progress.show !== false) {
        videoControls.append(progressDiv);
    }

    videoControls.append(btnArea2);

    videoElement.replaceWith(videoContainer);
    videoContainer.append(videoElement, videoControls);

    videoElement.controls = false;

    function newBtn(html, className) {
        let btn = document.createElement('button');
        btn.innerHTML = html;
        btn.classList.add(className);
        return btn;
    }

    let initX, initY, firstX, firstY;
    if (options.zoom.show !== false) {
        videoElement.addEventListener('mousedown', function(e) {
            if (zoom == 1) {
                return;
            }

            e.preventDefault();
            initX = this.offsetLeft;
            initY = this.offsetTop;
            firstX = e.pageX;
            firstY = e.pageY;

            this.addEventListener('mousemove', dragIt, false);

            window.addEventListener('mouseup', function() {
                videoElement.removeEventListener('mousemove', dragIt, false);
            }, false);
        }, false);

        videoElement.addEventListener('touchstart', function(e) {
            if (zoom === 1) {
                return;
            }

            e.preventDefault();
            initX = this.offsetLeft;
            initY = this.offsetTop;
            var touch = e.touches;
            firstX = touch[0].pageX;
            firstY = touch[0].pageY;

            this.addEventListener('touchmove', swipeIt, false);

            window.addEventListener('touchend', function(e) {
                e.preventDefault();
                videoElement.removeEventListener('touchmove', swipeIt, false);
            }, false);
        }, false);
    }

    function dragIt(e) {
        videoElement.style.left = initX+e.pageX-firstX + 'px';
        videoElement.style.top = initY+e.pageY-firstY + 'px';
    }

    function swipeIt(e) {
        let contact = e.touches;
        videoElement.style.left = initX+contact[0].pageX-firstX + 'px';
        videoElement.style.top = initY+contact[0].pageY-firstY + 'px';
    }
}