const svgPath = document.querySelectorAll('path');
const svgText = anime({
    targets: svgPath,
    loop: false,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000
});

function fadeOutLogo () {
    const loadingLogo = window.document.getElementById('ruten-top-logo');
    console.log(loadingLogo);
    // loadingLogo.animate({ transform: 'scale(0)', opacity: 0}, 500);
    var player = loadingLogo.animate([
        {opacity: 1},
        {opacity: 0}
    ], 500);

    player.addEventListener('finish', function () {
        loadingLogo.style.display = 'none';
    });
}    


svgText.finished.then(fadeOutLogo);
svgText.play();


