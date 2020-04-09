function stickyNav() {
    let nav = document.getElementById("nav-bar");
    let landingHeight = document.getElementById("title").offsetHeight - 64;
    if (landingHeight < document.scrollingElement.scrollTop) {
        nav.classList.add("down-nav");
    }
    else {
        nav.classList.remove("down-nav");
    }
}

// 화면 로딩 시 navigation bar의 디자인을 확인한다.
stickyNav();