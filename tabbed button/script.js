"use strict"

// Decleration of Variables 

const tabLink = document.getElementsByClassName('tab-link');
const allContent = document.querySelectorAll('.tab-content');

for(let i=0; i<tabLink.length; i++ ){
    tabLink[i].addEventListener('click', function(e){
        const current = document.getElementsByClassName('active');
        current[0].className =  current[0].className.replace(" active", "");
        this.className += " active"



        // switch content
const filter = e.target.dataset.filter;
console.log(filter);



allContent.forEach((content) =>{
    if(content.classList.contains(filter)){
        content.style.display = "block"

    } else{
        content.style.display = "none"
    }





});
    
    });
};
