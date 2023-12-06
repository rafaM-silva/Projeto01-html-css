let text = document.getElementById('text');
let treeLeft = document.getElementById('arvore-left');
let treeRight = document.getElementById('arvore-right');
let gateLeft = document.getElementById('grade-left');
let gateRight = document.getElementById('grade-right');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
});


