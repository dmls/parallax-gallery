import Parallax from 'parallax-js';

document.addEventListener('DOMContentLoaded', () => {
    let elems = document.getElementsByClassName('orientation-parallax');
    for (var i = 0; i < elems.length; ++i) {
        let elem = elems[i];
        elem.children[0].dataset['depth'] = '0.6';
        new Parallax(elem);
    }
});
