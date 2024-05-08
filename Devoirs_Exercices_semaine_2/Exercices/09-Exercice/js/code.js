//Création d'un objet «date»
var obDate = new Date();
//Extraction du numéro de jour de la semaine
var jour = obDate.getDay();
var nomJour;
// choix du nom de jour correspondant
switch (jour) {
  case 0:
    nomJour = "Dimanche";
    break;
  case 1:
    nomJour = "Lundi";
    break;
  case 2:
    nomJour = "Mardi";
    break;
  case 3:
    nomJour = "Mercredi";
    break;
  case 4:
    nomJour = "Jeudi";
    break;
  case 5:
    nomJour = "Vendredi";
    break;
  case 6:
    nomJour = "Samedi";
    break;
  default:
    nomJour = "Aucune journée de la semaine!";
}
//Émission du message d'alerte
alert("Nous sommes " + nomJour + " !");
