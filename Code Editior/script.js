'use strict'

// Dec of VAR
const left = document.querySelector('.left'),
right = document.querySelector('.right'),
bar = document.querySelector('.bar'),
editor = document.querySelector('.editor'),
run = document.querySelector('.btn-run'),
iframe = document.querySelector('.iframe'),
darkM = document.querySelector('.btn-dark'),
lightM = document.querySelector('.btn-light');


// Drag  Functionality

const drag = (e) =>{
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth/3) + "px";
    editor.resize();

}
bar.addEventListener('mousedown', () =>{
    document.addEventListener('mousemove', drag)
})
bar.addEventListener('mouseup', () =>{
    document.removeEventListener('mousemove', drag)
})


// Runing Functionality

run.addEventListener('click', () =>{
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI
    (html);
    I
});


// Dark mode

darkM.addEventListener('click', () =>{
    editor.style.backgroundColor = "#363836";
    editor.style.color = "#eee";
})

// Light mode
lightM.addEventListener('click', () =>{
    editor.style.backgroundColor = "";
    editor.style.color = "";
})

// Live code

document.getElementById('live').onclick = function(){ 
    if(this.checked){
        editor.addEventListener('keyup', () =>{
            const html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI
            (html);
            I
        }); 
    }

}