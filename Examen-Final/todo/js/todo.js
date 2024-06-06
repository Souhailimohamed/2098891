// premierement je cree un gestionnaire d evenement qui se declanche lorsque notre page a ete completement chargee.

document.addEventListener("DOMContentLoaded", () => {
  // on identifie nos champs avec leurs id deja predefinit dans le fichier html  et on les enregistes dans des constantes pr faciliter leurs manipulation.

  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const deleteButton = document.getElementById("deleteButton");
  const taskList = document.getElementById("taskList");
  const taskTotal = document.getElementById("taskTotal");

  // Ensuite en integre ce code qui nous permet de Positionner le curseur dans le champ taskInput à l'ouverture de la page
  taskInput.focus();

  // Ensuite on integre ce gestionnaire d evenement qui nous permet d'ctiver ou de désactiver le bouton "Ajout" en fonction de saisie du texte dans le taskInput
  // par defaut le button est desactive durant sa creation dans le fichier html.

  taskInput.addEventListener("input", () => {
    addButton.disabled = taskInput.value.trim() === "";
  });

  // Ensuite je constitue la Fonction pour ajouter une tâche
  function ajouterTache() {
    // on Récupère la valeur du champ de saisie
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");

      // On cree un nouvel element de liste pour la tâche
      checkbox.type = "checkbox";

      // On ajoute un événement pour activer ou désactiver le bouton "Suppression" en fonction des cases cochées
      checkbox.addEventListener("change", () => {
        deleteButton.disabled = !document.querySelectorAll(
          '#taskList input[type="checkbox"]:checked'
        ).length;
      });

      // On cree un élément span pour contenir le texte de la tâche
      const span = document.createElement("span");
      span.textContent = taskText;

      // Ajoute un événement pour barrer le texte lorsque l'on clique sur le checkbox
      checkbox.addEventListener("click", () => {
        span.classList.toggle("strike-task");
      });

      // Ensuite on ajoute la case à cocher et le texte de la tâche à l'élément de liste
      // et on ajoute l'élément de liste à la liste des tâches

      listItem.appendChild(checkbox);
      listItem.appendChild(span);
      taskList.appendChild(listItem);

      // on initialise ici nos element du formulaire

      taskInput.value = "";
      addButton.disabled = true;
      deleteButton.disabled = true;
      majTaskTotal(); // on appelle cette fonction pour calculer la somme des taches;
    }
  }

  // on definit ici l evenement declancher lorsqu'on clique sur le bouton "Ajout" qui est la fonction atouterTache
  addButton.addEventListener("click", ajouterTache);

  // on definit ici levenement declancher lorsqu'on appuie sur la touche "Enter"
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      ajouterTache();
    }
  });

  // un premier test de mon code a ete realise ici avec succes ********************

  // On definit mtn le gestionnaire d 'evenement pour Supprimer les tâches sélectionnées lorsqu on clique sur le boutton deleteButton
  deleteButton.addEventListener("click", () => {
    // on verifie ici les element selectionnes de la liste
    const checkedItems = document.querySelectorAll(
      '#taskList input[type="checkbox"]:checked'
    );
    // ensuite on les supprime
    checkedItems.forEach((item) => item.parentElement.remove());
    // et on desactive le button deleteButton
    deleteButton.disabled = true;
    majTaskTotal(); //on appelle la fonction pour calculer la somme apres suppession des taches;
  });

  
  // on initialise l'état des boutons et le nombre total de tâches

  addButton.disabled = true;
  deleteButton.disabled = true;
  majTaskTotal();


  // Fonction pour mettre à jour le nombre total de tâches

  function majTaskTotal() {
    taskTotal.textContent = `(${taskList.children.length})`;
  }



});
