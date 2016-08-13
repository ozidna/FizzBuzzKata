var checkerFizzBuzz;

checkerFizzBuzz = {
    /*check if the table is empty
    if is empty return version2 with firstParam=3 and secondParam=5*/
    checkNotRuleProvided : function(firstAndSecondMultiple) {
    if (firstAndSecondMultiple[0] == null && firstAndSecondMultiple[1] == null) {
        firstAndSecondMultiple[0]=3;
        firstAndSecondMultiple[1]=5;
    }
        return firstAndSecondMultiple;
},

    /*this function takes as parameter a number and returns "Fizz" if it's a multiple of the first param or "Buzz"
     if it's a multiple of second param or "FizzBuzz" if it's multiple of firt param and secand param
     if note multiple of first pram or second param or (both) it return the same number
    */
    firstGenaration: function (input,firstAndSecondMultiple) {

        /* check if the table is empty*/
        var FizzBuzzMultiple=this.checkNotRuleProvided(firstAndSecondMultiple);
        // if the inpute is multiple of first param and second param its multiple of firstParam * secondPram
        if (input % (FizzBuzzMultiple[0]*FizzBuzzMultiple[1]) === 0) {
            return "FizzBuzz";
        }
        if (input % FizzBuzzMultiple[0] === 0) {
            return "Fizz";
        }
        if (input % FizzBuzzMultiple[1] === 0) {
            return "Buzz";
        }
        else {
            return input
        }
    },
    /*
    this generator to generate the number of 1 at 100
     and uses the first function to replace the multiple of first param by "Fizz"
     and the multiple of second param by "Buzz" and the multiple two-by "FizzBuzz"
    */
    Generetor: function (firstAndSecondMultiple) {
        var arr = [];
        for (i = 1; i < 101; i++) {
            arr.push(this.firstGenaration(i,firstAndSecondMultiple));
        }
        return arr;
    }


};

module.exports = checkerFizzBuzz;