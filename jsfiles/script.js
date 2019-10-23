document.addEventListener('DOMContentLoaded', function () {
    if (location.hash) {
        var hash_name = location.hash.slice(1);
        var contentElement = document.getElementById(hash_name + '-content');
        domRect = contentElement.getBoundingClientRect();
        var loc = domRect.top;

        window.scrollTo({
            top: window.pageYOffset + loc - 100,
            behavior: "smooth"
        });
    }
}, false);

var preventScroll = {
    x:0,
    y:0,
    setPos(x=window.pageXOffset,y=window.pageYOffset){
        this.x=x;
        this.y=y;
    },
    handleEvent(){
        window.scrollTo(this.x,this.y);
    },
    enable(){
        this.setPos();
        window.addEventListener("scroll",this);
    },
    disable(){
        window.removeEventListener("scroll",this);
    }
};

function scrollFunc(content) {
    var modal = document.getElementById('header-menu-modal');
    var button = document.getElementById('modal-button').children[0];
    modal.classList.remove('header-menu-open-modal');
    button.classList.remove('open-modal');
    var contentElement = document.getElementById(content);
    var domRect = contentElement.getBoundingClientRect();
    var loc = domRect.top;

    preventScroll.disable();
    window.scrollTo({
        top: window.pageYOffset + loc - 100,
        behavior: "smooth"
    });
}

function openModalFunc() {
    var targetElement = document.getElementById('modal-button').children[0];
    if (targetElement.classList == '') {
        targetElement.classList.add('open-modal');
        document.getElementById('header-menu-modal').classList.add('header-menu-open-modal');
        preventScroll.enable();
    } else {
        targetElement.classList.remove('open-modal');
        var modal = document.getElementById('header-menu-modal');
        modal.classList.remove('header-menu-open-modal');
        preventScroll.disable();
    }
}

window.onscroll = function() {
    var header = document.getElementById('header');
    var scroll = this.pageYOffset;
    var opacity = scroll / 500;
    header.style.backgroundColor = 'rgba(255,255,255,' + opacity + ')';
}

function openMoreInfo(num) {
    var target = document.getElementById('member-info-' + num.toString());
    target.classList.add('open-more-info');
    window.scrollTo({
        top: window.pageYOffset + 500,
        behavior: "smooth"
    });
}
