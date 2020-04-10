let animation_done = false

function stickyNav() {
    let nav = document.getElementById("nav-bar");
    let landingHeight = document.getElementById("title").offsetHeight - 64;
    if (landingHeight < document.scrollingElement.scrollTop) {
        console.log(document.scrollingElement.scrollTop);
        nav.classList.add("down-nav");
    }
    else {
        console.log(document.scrollingElement.scrollTop);
        nav.classList.remove("down-nav");
    }
}

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


// 화면 로딩 시 navigation bar의 디자인을 확인한다.
window.onscroll = function() {
    stickyNav();
};

animateValue("value", 1, 77, 5000);
