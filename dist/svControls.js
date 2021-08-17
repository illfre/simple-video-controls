function svControls(videoElement, options = {}) {
    let self = this;

    this.options = {
        play: {
            icon: '<svg width="10" focusable="false" data-icon="play" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>',
            show: true,
        },
        pause: {
            icon: '<svg width="10" focusable="false" data-icon="pause" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>',
            show: true,
        },
        stop: {
            icon: '<svg width="10" focusable="false" data-icon="stop" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path></svg>',
            show: true,
        },
        mute: {
            icon: '<svg width="10" focusable="false" data-icon="volume-mute" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>',
            show: true,
        },
        volume: {
            icon: '<svg width="10" focusable="false" data-icon="volume-up" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>',
            show:  true,
            value: 0.5,
        },
        progress: {
            show: true,
            color: '#4d9dff',
            fontFamily: 'sans-serif',
            fontSize: '14px',
        },
        fullscreen: {
            icon: '<svg width="10" focusable="false" data-icon="expand" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path></svg>',
            show: true,
        },
        zoom: {
            icon: '<svg width="10" focusable="false" data-icon="search-plus" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"></path></svg>',
            show: true,
        },
        settings: {
            icon: '<svg width="10" focusable="false" data-icon="cog" class="svcIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>',
            show: true,
        },
        clickPlayPause: false,
        spacebarPlayPause: true,
        backgroundColor: 'linear-gradient(0deg, #0000007a, transparent)',
        color: 'white',
        accentColor: '#4d9dff',
        minWidth: 500,
        minHeight: 30,
        showOnHover: true,
        loop: false,
        autoplay: false,
        muted: false
    };

    Object.keys(options).forEach(function(key) {
        self.options[key] = options[key];
    });

    if (typeof videoElement === 'string') {
        videoElement = document.getElementById(videoElement);
    }
    videoElement.classList.add('scvVideo');

    if (self.options.loop) {
        videoElement.loop = self.options.loop;
    }

    if (self.options.autoplay) {
        videoElement.autoplay = self.options.autoplay;
    }

    if (self.options.muted) {
        videoElement.muted = self.options.muted;
    }

    if (self.options.volume.value != null) {
        videoElement.volume = self.options.volume.value;
    }

    if (self.options.accentColor) {
        document.documentElement.style.setProperty('--svcAccentColor', self.options.accentColor);
    }

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('svcContainer');
    const videoControls = document.createElement('div');
    videoControls.classList.add('svcControls');

    if (self.options.showOnHover) {
        videoControls.classList.add('svcControlsHidden');
    }

    if (self.options.backgroundColor) {
        videoControls.style.background = self.options.backgroundColor;
    }

    if (self.options.color) {
        videoControls.style.color = self.options.color;
    }

    let btnClass = 'svcBtn';

    const playBtn = newBtn(self.options.play.icon, btnClass);
    playBtn.setAttribute('data-state', 'play');
    playBtn.onclick = () => handlePause();

    const pauseBtn = newBtn(self.options.pause.icon, btnClass);
    pauseBtn.setAttribute('data-state', 'pause');
    pauseBtn.onclick = () => handlePause();

    videoControls.setAttribute('data-state', 'paused');
    if (videoElement.autoplay) {
        videoControls.setAttribute('data-state', '');
    }

    function handlePause() {
        let videoPaused = videoElement.paused || videoElement.ended;
        videoPaused ? videoElement.play() : videoElement.pause();
        videoControls.setAttribute('data-state', videoPaused ? '' : 'paused');
    }

    videoContainer.onclick = () => {
        progress.focus();
    };

    let videoClickTimer;
    videoElement.onclick = (e) => {
        if (self.options.clickPlayPause && zoom <= 1 && e.detail === 1) {
            videoClickTimer = setTimeout(() => {
                handlePause();
            }, 200)
        }
    };

    document.addEventListener('keypress', (e) => {
        if (self.options.spacebarPlayPause && document.activeElement === progress && e.code === "Space") {
            handlePause();
        }
    });

    videoElement.onended = () => {
        if (videoElement.loop) {
            return;
        }
        videoControls.setAttribute('data-state', '');
    };

    const stopBtn = newBtn(self.options.stop.icon, btnClass);
    stopBtn.setAttribute('data-state', 'stop');
    stopBtn.onclick = function(e) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoControls.setAttribute('data-state', '');
    };

    const volumeDiv = document.createElement('div');
    const volumeIcon = document.createElement('div');
    volumeIcon.innerHTML = self.options.volume.icon;
    volumeDiv.classList.add('verticalSlider');
    volumeDiv.classList.add('svcBtn');
    volumeDiv.onclick = function(e) {
        if (e.target === volumeSlider) {
            return;
        }
        volumeDiv.setAttribute('data-state', videoElement.muted ? 'unmute' : 'mute');
        videoElement.muted = !videoElement.muted;
        if (videoElement.muted) {
            volumeIcon.innerHTML = self.options.mute.icon;
            volumeSlider.value = 0;
        } else {
            volumeIcon.innerHTML = self.options.volume.icon;
            volumeSlider.value = volume;
        }
        updateVolumeSliderVisual(e);
    };

    volumeDiv.append(volumeIcon);

    const volumeSlider = document.createElement('input');
    let volume = videoElement.volume;
    volumeSlider.setAttribute('type', 'range');
    //volumeSlider.setAttribute('orient', 'vertical');
    volumeSlider.setAttribute('min', 0);
    volumeSlider.setAttribute('max', 1);
    volumeSlider.setAttribute('step', 0.1);
    volumeSlider.value = videoElement.muted ? 0 : videoElement.volume;
    volumeSlider.onchange = function(e) {
        volume = e.target.value
        videoElement.volume = volume;
        volumeDiv.setAttribute('data-state', 'unmute');
        videoElement.muted = false;
        volumeIcon.innerHTML = self.options.volume.icon;
    };

    let volumeSliderInterval = null;
    volumeSlider.onmousedown = function(e) {
        volumeSliderInterval = setInterval(() => {
            updateVolumeSliderVisual(e);
        }, 10);
    };

    document.addEventListener('mouseup', (e) => {
        videoClickActive = false;
        videoClickPostX = e.pageX;
        videoClickPostY = e.pageY
        try {
            clearInterval(volumeSliderInterval);
        } catch (err) {
            
        }
    });

    let updateVolumeSliderVisual = function () {
        let value = (volumeSlider.value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min) * 100;
        volumeSlider.style.background = 'linear-gradient(to right, ' + self.options.progress.color + ' 0%, ' + self.options.progress.color + ' ' + value + '%, rgba(240, 240, 240, 0.4) ' + value + '%, rgba(240, 240, 240, 0.4) 100%)';
    };

    volumeDiv.prepend(volumeSlider);
    updateVolumeSliderVisual();

    let zoom = 1;

    const zoomDiv = document.createElement('div');
    zoomDiv.innerHTML = self.options.zoom.icon;
    zoomDiv.classList.add('verticalSlider');
    zoomDiv.classList.add('svcBtn');
    zoomDiv.onclick = function (e) {
        if (e.target === zoomSlider) {
            return;
        }

        zoom = '1';
        videoElement.style.transform = 'scale(' + zoom + ')';
        zoomSlider.value = zoom;

        videoElement.style.left = '0';
        videoElement.style.top = '0';

        updateZoomSliderVisual();
    }

    const zoomSlider = document.createElement('input');
    zoomSlider.setAttribute('type', 'range');
    //zoomSlider.setAttribute('orient', 'vertical');
    zoomSlider.setAttribute('min', 1);
    zoomSlider.setAttribute('max', 3);
    zoomSlider.setAttribute('step', 0.1);
    zoomSlider.value = zoom;
    zoomSlider.onchange = function(e) {
        zoom = e.target.value
        videoElement.style.transform = 'scale(' + zoom + ')';

        if (zoom < 2) {
            videoElement.style.left = '0';
            videoElement.style.top = '0';
        }
    };

    let zoomSliderInterval = null;
    zoomSlider.onmousedown = function(e) {
        zoomSliderInterval = setInterval(() => {
            updateZoomSliderVisual(e);
        }, 10);
    };

    document.addEventListener('mouseup', () => {
        clearInterval(zoomSliderInterval);
    });

    let updateZoomSliderVisual = function () {
        let value = (zoomSlider.value - zoomSlider.min) / (zoomSlider.max - zoomSlider.min) * 100;
        zoomSlider.style.background = 'linear-gradient(to right, ' + self.options.progress.color + ' 0%, ' + self.options.progress.color + ' ' + value + '%, rgba(240, 240, 240, 0.4) ' + value + '%, rgba(240, 240, 240, 0.4) 100%)';
    };

    zoomDiv.prepend(zoomSlider);

    const fullscreenBtn = newBtn(self.options.fullscreen.icon, btnClass);
    fullscreenBtn.setAttribute('data-state', 'go-fullscreen');

    let fullScreenToggle = () => {
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

    fullscreenBtn.onclick = fullScreenToggle;
    videoElement.addEventListener('dblclick', () => {
        clearTimeout(videoClickTimer);
        fullScreenToggle();
    });

    const btnArea1 = document.createElement('div');

    if (self.options.play && self.options.play.show !== false) {
        btnArea1.append(playBtn);
    }
    if (self.options.pause && self.options.pause.show !== false) {
        btnArea1.append(pauseBtn);
    }
    if (self.options.stop && self.options.stop.show !== false) {
        btnArea1.append(stopBtn);
    }

    btnArea1.classList.add('svcBtnArea');

    const btnArea2 = document.createElement('div');

    if (self.options.volume && self.options.volume.show !== false) {
        btnArea2.append(volumeDiv);
    }
    if (self.options.zoom && self.options.zoom.show !== false) {
        btnArea2.append(zoomDiv);
    }
    if (self.options.fullscreen && self.options.fullscreen.show !== false) {
        btnArea2.append(fullscreenBtn);
    }

    btnArea2.classList.add('svcBtnArea');

    const progressDiv = document.createElement('div');
    progressDiv.classList.add('svcProgressDiv');

    const progressTime = document.createElement('div');
    progressTime.classList.add('svcProgressTime');
    progressTime.style.fontFamily = self.options.progress.fontFamily;
    progressTime.style.fontSize = self.options.progress.fontSize;
    progressTime.innerText = '00:00';

    const progress = document.createElement('input');
    progress.setAttribute('type', 'range');
    progress.setAttribute('step', 0.01);
    progress.classList.add('svcProgress');

    progress.onchange = function(e) {
        videoElement.currentTime = e.target.value;
    };

    let progressInterval = null;
    let wasPlaying = true;
    let isSeeking = false;
    progress.onmousedown = function(e) {
        isSeeking = true;
        if (videoElement.paused || videoElement.ended) {
            wasPlaying = false;
        } else {
            videoElement.pause();
            handlePause();
        }

        progressInterval = setInterval(() => {
            updateProgress(e);
        }, 10);
    };

    document.addEventListener('mouseup', () => {
        if (isSeeking && wasPlaying) {
            videoElement.play();
            handlePause();
        }
        isSeeking = false;
        clearInterval(progressInterval);
    });

    let updateProgress = function(e) {
        if (e) {
            videoElement.currentTime = e.target.value;
        }
        updateProgressVisual();
    };

    let updateProgressVisual = function () {
        let value = (progress.value - progress.min) / (progress.max - progress.min) * 100;
        progress.style.background = 'linear-gradient(to right, ' + self.options.progress.color + ' 0%, ' + self.options.progress.color + ' ' + value + '%, rgba(240, 240, 240, 0.4) ' + value + '%, rgba(240, 240, 240, 0.4) 100%)';
        let time = videoElement.currentTime;
        progressTime.innerText = new Date(time * 1000).toISOString().substr(14, 5);
    };

    videoElement.currentTime = 0;
    progress.value = videoElement.currentTime;

    videoElement.onloadedmetadata = function() {
        progress.setAttribute('max', videoElement.duration);
    };

    videoElement.ontimeupdate = function() {
        if (!progress.getAttribute('max')) progress.setAttribute('max', videoElement.duration);
        progress.value = videoElement.currentTime;
        updateProgressVisual();
    };

    progressDiv.append(progress, progressTime);

    if (self.options.play.show !== false || self.options.pause.show !== false || self.options.stop.show !== false) {
        videoControls.append(btnArea1);
    }

    if (self.options.progress.show !== false) {
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

    let videoClickActive = false;
    let videoClickPostX = null;
    let videoClickPostY = null;

    let initX, initY, firstX, firstY;
    if (self.options.zoom.show !== false) {
        videoElement.addEventListener('mousedown', function(e) {
            if (zoom <= 1) {
                return;
            }

            if (self.options.clickPlayPause) {
                setTimeout(() => {
                    if (videoClickActive) {
                        return;
                    }
                    if (videoClickPostX && Math.abs(initX+e.pageX-firstX - initX+videoClickPostX-firstX) > 20) {
                        return;
                    }
                    if (videoClickPostY && Math.abs(initY+e.pageY-firstY - initY+videoClickPostY-firstY) > 20) {
                        return;
                    }
                    handlePause();
                }, 200);
            }

            videoClickActive = true;

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

    return this;
}

if (typeof exports === "object") {
    module.exports = svControls;
}