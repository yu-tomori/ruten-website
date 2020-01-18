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
    
//    var player = loadingLogo.animate([
//        {opacity: 1},
//        {opacity: 0}
//    ], 500);
//
//    player.addEventListener('finish', function () {
//        loadingLogo.style.display = 'none';
//    });

    loadingLogo.classList.add('fadeOutLoading');
    window.setTimeout(function () {
        loadingLogo.style.display = 'none';
    }, 900);
}    


svgText.finished.then(fadeOutLogo);
svgText.play();


