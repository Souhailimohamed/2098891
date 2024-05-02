const phrase = 'The strength of Javascript is that you can do anything. The weakness is that you will.'

console.log('La phrase entiere: ', phrase);
console.log('La longueur de la chaine de caractere: ', phrase.length);
console.log('La position du mot Javascript : ',phrase.indexOf('Javascript'));
console.log('La position du dernier is :',phrase.lastIndexOf('is'));
console.log('La derniere phrase seulement :',phrase.split('.')[1]);
console.log('Les 10 caracteres a partir du 17iem caractere: ',phrase.substring(16,26));
console.log('Combien de mots dans la phrase: ',phrase.split(' ').length);
console.log('Le 61iem caractere: ',phrase[60]);
const phrase2= phrase.replaceAll('you', 'I');
console.log('Remplacer \'you\' par \'I\' dans toute la phrase: ',phrase2);
