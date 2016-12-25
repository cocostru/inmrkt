var hintlab = document.querySelector('.hint-label'),
    hint = document.querySelector('.hint-wrap'),
    info = document.querySelector('.info-wrap'),
    mql = window.matchMedia( 'only screen and (min-device-width : 0) and (max-device-width : 1024px) and (orientation : landscape)' ),
    mqp = window.matchMedia( 'only screen and (min-device-width : 0) and (max-device-width : 1024px) and (orientation : portrait)' );

if (!mql.matches && !mqp.matches) {

    hintlab.addEventListener('mouseover', function () {
        hint.classList.add('m');
        info.classList.add('o');
    });

    hintlab.addEventListener('mouseleave', function () {
        hint.classList.remove('m');
        info.classList.remove('o');
    });

} else {

    hintlab.addEventListener('touchend', function () {
        hint.classList.add('m');
        info.classList.add('o');
    });

    document.addEventListener('touchend', function (e) {
        if (e.target != hintlab) {
            hint.classList.remove('m');
            info.classList.remove('o');
        }
    });

}
