'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
   if(className == "clear-theme"){
    this.textContent = "Dark";
   }
   else{
    this,this.textContent = "Clear";
   }


});