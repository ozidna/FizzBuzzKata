# FizzBuzzKata
Dans ce kata on va ecrire un programe en javaScript qui va generer des nombre entre 1 et 100, en deux versions:
La version 1:
le programe va generer des nombre entre 1 et 100 mais dans le cas des multiple de 3 il seront remplacer par "Fizz" ,
et dans le cas des muultiples de 5 il seront remplacer "Buzz",
La version 2:
c'est comme la version 1 mais qu'on on a des nombres multiple de 3 et 5 en meme temps il seront remplacer "FizzBuzz"

#------------Utilisation de l'application------------:

*Instalation:


1- tout d'abord clone repository git par la commande
 git clone https://github.com/ozidna/FizzBuzzKata.git

-- installation de node --

install node


2-npm install

*lancer l'application
npm start

*lancer les test
npm test


NB:

j'ai separer les deux version dans le git

*si vous voulez tester la premier version :
 git checkout VERSION1

*si vous voulez tester la deuxieme version :
 git checkout VERSION2

 *si vous voulez tester la troisieme version :
 git checkout VERSION3

 *Le master contient la derniers version c-a-d: VERSION3


 utilisation de version3:
 apres l'instalation de node et de npm lors du lancement de l'aplication un menu s'affiche pour vous dirigez a l'utlisation de l'application


Integration de l'application


Integration de la librairie dans une application Node existante:

var checkerFizzBuzz = require('./lib/generetorNumbre');

--> choisir le multiple de Fizz
--> choisir le multiple de Buzz
--> apeler la fonction qui genere les nombres de 1 a 100 et remplace les multiple de Fizz par Fizz et les multiple de Buzz par Buzz

var programe= checkerFizzBuzz.Generetor([multipleFizz, multipleBuzz])

--> affichage de retour de programe




