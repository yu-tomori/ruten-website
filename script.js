function locationOver(locationName) {
    var loc = document.getElementById('location-' + locationName);
    var child = loc.firstChild.nextElementSibling;
    child.style.display = 'block';
}

function locationLeave(locationName) {
    var loc = document.getElementById('location-' + locationName);
    var child = loc.firstChild.nextElementSibling;
    child.style.display = 'none';
}

function triggerModal(event) {
    var modal = document.getElementById('header-menu-modal');
    modal.style.display = 'block';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollFunc(content) {
    var modal = document.getElementById('header-menu-modal');
    modal.style.display = 'none';
    var contentElement = document.getElementById(content);
    var domRect = contentElement.getBoundingClientRect();
    var loc = domRect.top;
    window.scrollTo({
        top: window.pageYOffset + loc - 100,
        behavior: "smooth"
    });
}

function stopModal() {
    var modal = document.getElementById('header-menu-modal');
    modal.style.display = 'none';
}

function faqFunc(n) {
    var answer = document.getElementById('faq-a-' + n);
    var dropdownMark = answer.previousElementSibling.lastChild;
    if (answer.style.display == 'none') {
        answer.style.display = 'block';
        dropdownMark.src = './icon/dropdown-icon-up-direction.png';
    } else {
        answer.style.display = 'none';
        dropdownMark.src = './icon/dropdown-icon-down-direction.png';

    }
}

window.onscroll = function() {
    var header = document.getElementById('header');
    var scroll = this.pageYOffset;
    var opacity = scroll / 500;
    header.style.backgroundColor = 'rgba(255,255,255,' + opacity + ')';
}
