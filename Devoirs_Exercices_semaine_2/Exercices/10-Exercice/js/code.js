// Nombre choisi au clavier
var nb = prompt("Choisissez un nombre",'');
// Valeur initiale factorielle
var fact=1;

for (var i=nb; i>1; i-=1)
  {
      fact*=i;
  }

  // Affichage du résultat
  alert ("Factorielle " + nb + " = " + fact);
