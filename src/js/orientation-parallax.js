import Parallax from 'parallax-js';

document.addEventListener('DOMContentLoaded', () => {
    let elems = document.getElementsByClassName('orientation-parallax');
    for (var i = 0; i < elems.length; ++i) {
        let elem = elems[i];
        new Parallax(elem);
    }
});
