# Simple Video Controls
### A simple HTML video player with custom controls and theming.

![SVC Example Image](example/svc-image-preview.jpg?raw=true "Example image")

### How to use:

Include the files needed.

```html
<script src="../dist/svControls.js"></script>
<link href="../dist/svControls.css" rel="stylesheet">
```

Then use the function, passing in the element ID or DOM Element Object.

```javascript
svControls('videoID');
```

If you would like to alter the default video player options, you can pass in options.

```javascript
svControls(
    'videoID',
    {
        stop: false,
        showOnHover: false
    }
);
```

Example options:

```
play: {
    icon: '<i class="icon..."></i>',
    show: true,
},
pause: {
    icon: '<i class="icon..."></i>',
    show: true,
},
stop: {
    icon: '<i class="icon..."></i>',
    show: true,
},
mute: {
    icon: '<i class="icon..."></i>',
    show: true,
},
volume: {
    icon: '<i class="icon..."></i>',
    show:  true,
    value: 0.5,
},
progress: {
    show: true,
    color: '#4d9dff',
    fontFamily: 'monospace',
    fontSize: '16px',
},
fullscreen: {
    icon: '<i class="icon..."></i>',
    show: true,
},
zoom: {
    icon: '<i class="icon..."></i>',
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
```