
// premierement je cree un gestionnaire d evenement qui se declanche lorsque notre page a ete completement chargee.
document.addEventListener("DOMContentLoaded", () => {
  
  //ensuite on identifie nos champs avec leurs id deja predefinit dans le fichier html  et en les enregistes dans des constantes pr faciliter leurs manipulation.
  
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const deleteButton = document.getElementById('deleteButton');
  const taskList = document.getElementById('taskList');
  const taskTotal = document.getElementById('taskTotal');

  // Ensuite en integre ce code qui nous permet de Positionner le curseur dans le champ taskInput à l'ouverture de la page
  taskInput.focus();


  // Ensuite on integre ce gestionnaire d evenement qui nous permet d'ctiver ou de désactiver le bouton "Ajout" en fonction de l'entrée
  // par defaut le button est desactive durant sa creation dans le fichier html.

  taskInput.addEventListener('input', () => {
      addButton.disabled = taskInput.value.trim() === '';
  });

  





});