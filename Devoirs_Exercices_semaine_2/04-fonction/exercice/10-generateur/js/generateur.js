'use strict'

function createItem(myText) {
  return "<li>" + myText + "</li>";
}


function createList(items) {
  let myList = '<ul>';

  for (let i = 0; i < items.length; i++) {
    myList += `<li>${items[i]}</li>`;
  }

  myList += '</ul>';
  return myList;
}


document.write("<p>Ces listes sont produites dynamiquement.</p>");
document.write("<ul>" + createItem("Item A") + "</ul>");
document.write(createList(["Item1", "Item2", "Item3", "Item4"]));
