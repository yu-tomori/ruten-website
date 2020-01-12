function slider(existedCircleNum = 0) {
    const nowCircle = document.getElementById('side-circles').children[existedCircleNum];
    const nextCircle = document.getElementById('side-circles').children[existedCircleNum + 1];
    const selectedSignal = document.getElementById('side-circles').lastElementChild;
    const imageElem = document.getElementById('ruten-images-slider-wrapper').lastElementChild;
   
    selectedSignal.setAttributeNS(null, "cy", 50 + (existedCircleNum + 1) * 20);

    const nextImageLink = '../image/office-image' + String(existedCircleNum + 1) + '.jpg';
    imageElem.setAttribute("src", nextImageLink);
    imageElem.classList.add('fadeInImage');
    
    if (existedCircleNum + 1 >= 4) {
        setTimeout( function () {return slider(0);}, 4000);
    } else {
        setTimeout( function () {return slider(existedCircleNum + 1);}, 4000);
    }
};

window.onload = slider();
