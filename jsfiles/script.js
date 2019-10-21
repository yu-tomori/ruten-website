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
    modal.style.display = 'none';
    var contentElement = document.getElementById(content);
    var domRect = contentElement.getBoundingClientRect();
    var loc = domRect.top;

    preventScroll.disable();
    window.scrollTo({
        top: window.pageYOffset + loc - 100,
        behavior: "smooth"
    });
}

function stopModal(event) {
    var modal = document.getElementById('header-menu-modal');
    modal.style.display = 'none';
    preventScroll.disable();
}

window.onscroll = function() {
    var header = document.getElementById('header');
    var scroll = this.pageYOffset;
    var opacity = scroll / 500;
    header.style.backgroundColor = 'rgba(255,255,255,' + opacity + ')';
}
