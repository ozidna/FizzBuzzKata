/**
 * Created by OZI3519 on 12/08/2016.
 */
var checkerFizzBuzz = require('./lib/generetorNumbre');
var scanf = require('scanf');
var firstAndSecondMultiple=[3,5];

console.log("\n\n*********************** Bonjour ***********************\n\n")
console.log("Menu:\n");
console.log("1- executer le program FizzBuzzKata                    0- Quitter \n");
console.log("Merci de saisir votre choix?  \n");
var number = scanf('%d');

while (number !== 0) {
    console.log("\nMerci de saisir un nombre entre 1 et 100 si voux t'apper 0 vous allez quitter l'application?  \n");
    var number = scanf('%d');
    if (number !== 0 &&(number!==null)) {
        console.log(checkerFizzBuzz.firstGenaration(number,firstAndSecondMultiple) + "\n");
    }
}
