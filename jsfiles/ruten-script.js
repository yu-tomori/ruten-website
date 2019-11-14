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

function faqFunc(n) {
    var answer = document.getElementById('faq-a-' + n);
    var dropdownMark = answer.previousElementSibling.lastChild;
    if (answer.style.display == 'none') {
        answer.style.display = 'block';
        dropdownMark.src = '../icon/dropdown-icon-up-direction.png';
    } else {
        answer.style.display = 'none';
        dropdownMark.src = '../icon/dropdown-icon-down-direction.png';

    }
}
