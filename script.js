 var addToDoButton = document.getElementById('addToDo');
 var toDoContainer = document.getElementById('toDoContainer');
 var inputField = document.getElementById('inputField');
 var msg = document.getElementById('message');

 addToDoButton.onclick = function() {
     // verifier si l'input n'est pas vide
     if (inputField.value != "") {
         msg.innerText = "";
         var paragraph = document.createElement('p');
         paragraph.innerText = inputField.value;
         paragraph.classList.add('paragraphe-style')
         toDoContainer.appendChild(paragraph);

         inputField.value = "";

         paragraph.addEventListener('click', function() {
             paragraph.classList.add('paragraph-click');
         })

         paragraph.addEventListener('dblclick', function() {
             toDoContainer.removeChild(paragraph);
         })
     } else {
         msg.innerText = "Le champ est vide!!";
         msg.style.color = "red";
         msg.style.textAlign = "center"

     }


 }