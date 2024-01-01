'use strict'

const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const input = document.getElementById('link');
const closeM = document.getElementById('close');

btn.addEventListener('click', openPopup)
closeM.addEventListener("click", closePopup);
// Open--pop-Up

function openPopup(e){
    e.preventDefault();
    // console.log(input.value);
    modal.style.display = "block";
    startCountdown()
}

// close-- popup

function closePopup(e){
    // e.preventDefault();
    // console.log(input.value);
    modal.style.display = "none";
}

/*
window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}
*/



/// countdown function


let reverseCounter = 10;
let progressBar = document.getElementById("pbar")
let counting = document.getElementById("countdown");


function startCountdown(){
    let  downloadtimer = setInterval(() =>{
        progressBar.value = 10 - (--reverseCounter);
        if(reverseCounter <= 0 ){
            clearInterval(downloadtimer)
            closePopup();
            window.open(input.value, "_blank");
        }

        counting.innerHTML = reverseCounter;
    }, 1000)
    let reverseCounter = 10;
}