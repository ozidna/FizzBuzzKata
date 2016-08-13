/**
 * Created by OZI3519 on 12/08/2016.
 */
var checkerFizzBuzz = require('./lib/generetorNumbre');
var scanf = require('scanf');
var firstAndSecondMultiple = [3, 5];

console.log("\n\n*********************** Bonjour ***********************\n\n")
console.log("***********************Menu***********************:\n");
console.log("1- executer le program FizzBuzzKata                    0- Quitter \n");
console.log("Merci de saisir votre choix?  \n");
var number = scanf('%d');
while ((number !== 0)) {
    console.log("\n!!!!!N.B!!!!! :\n si vous avez pas remplir les deux multiple de fizz et Buzz la valeur par defaut et 3,5\n" +
        "le generator peut fonctioner par un seul multiple\n");
    console.log("\nMerci de saisir le multiple de Fizz,?  \n");
    var multipleFizz = scanf('%d');
    console.log("\nMerci de saisir le multiple de Buzz?  \n");
    var multipleBuzz = scanf('%d');
    console.log(checkerFizzBuzz.Generetor([multipleFizz, multipleBuzz]) + "\n");
    console.log("\nvoulez vous continuer a executer le programe si oui taper 1 si non tapper 0  \n");
    var number = scanf('%d');
}
