//Scroll button


function backToTop(){
    document.documentElement.scrollTop = 0;
}

var btn = window.document.getElementById('btn_top')
btn.addEventListener('mouseover',enterChangeColor)
btn.addEventListener('mouseout',outChangeColor)

function enterChangeColor(){
btn.style.background = 'black';
}
function outChangeColor(){
    btn.style.background = '';
}