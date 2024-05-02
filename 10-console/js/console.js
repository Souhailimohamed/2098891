/**
 * Exercice - console
 *
 * Utiliser la console JavaScript pour voir les valeurs et les types JavaScript
 *
 * Consignes:
 *  Créer le fichier js/console.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette.
 *
 * Note: Seulement l'objet console est nécessaire, pas d'itération ou autre structure de contrôle
 */

'use strict'

const temperature = 21.3;
const fruits = ['pomme', 'poire', 'orange'];

let a=18;
let b="dis-huit";
let c=true;
let d=null;
let e;

console.log('Salut.');
console.log(temperature);
console.log(fruits);
console.info('La temperature est %f', temperature);
console.info('la collection de fruits est %o',fruits);
console.dirxml("<h1> pas d'interpreteur HTML </h1>");
console.log(a, b, c, d, e);


console.group('Ceci est un groupe a part');
console.log('Contenu du groupe');
console.groupEnd();

console.group('Ceci est un second groupe a part (ferme par defaut)');
console.log('Contenu du second groupe');
console.groupEnd();

