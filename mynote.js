let addButton = document.getElementById('addbut');
let maneTextarea = document.getElementById('txtarea');
let noteSaverButton = document.getElementById('notesaver');
let newLi = document.getElementById('saved') 

addButton.onclick = function() {
    maneTextarea.style.visibility = 'visible';
    noteSaverButton.style.visibility = 'visible';
    newLi.style.visibility = 'visible';
}


let noteSaverBut = document.getElementById('notesaver');
let newText = document.getElementById('newtext');
let noteName = document.getElementById('notename');


noteSaverButton.onclick = function() {
    newText.textContent = maneTextarea.value;
    newText.style.visibility = 'hidden' 
}




