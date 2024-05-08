'use strict'

function createItem(myText) {
  return "<li>" + myText + "</li>";
}

/*function createList(items) {
  
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}*/

function createList(items) {
  let myList = '<ul>';

  for (let i = 0; i < items.length; i++) {
    myList += `<li>${items[i]}</li>`;
  }

  myList += '</ul>';
  return myList;
}


window.document.write("<p>Ces listes sont produites dynamiquement.</p>");
window.document.write("<ul>" + createItem("Item A") + "</ul>");
window.document.write(createList(["Item1", "Item2", "Item3", "Item4"]));
