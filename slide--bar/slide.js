'use strict'
let thumbnails = document.getElementsByClassName('thumbnail')
let slider = document.getElementById('slider');
let ButtonLeft = document.getElementById('slide-left');
let ButtonRight = document.getElementById('slide-right');

//-- slide to left
ButtonLeft.addEventListener('click', () =>{
 slider.scrollLeft -= 125;
});

// --- slide to  right
ButtonRight.addEventListener('click', () =>{
 slider.scrollLeft += 125;
});



const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);

// -- Auto play // slide as an animation

function autoPlay(){

    if(slider.scrollLeft > (maxScrollLeft - 1)){

        slider.scrollLeft -= maxScrollLeft;

    } else{
 slider.scrollLeft += 1;

    }

}
let play = setInterval(autoPlay, 50);

// Pausing the slider On Hover //

for(let i=0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover', () =>{
        clearInterval(play);
    });
    thumbnails[i].addEventListener('mouseout', () =>{
   return play = setInterval(autoPlay, 50);
    });
};

