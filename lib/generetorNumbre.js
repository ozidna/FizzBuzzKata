var checkerFizzBuzz;

checkerFizzBuzz = {

    /*this function takes as parameter a number and returns "Fizz" if it's a multiple of 3 or "Buzz"
     if it's a multiple of 5 or "FizzBuzz" if it's multiple of 3 and 5
     if note multiple of 3 or 5 or (3 and 5) it return the same number
    */
    firstGenaration: function (input) {
        // if the inpute is multiple of 3 and 5 its multiple of 15
        if (input % 15 === 0) {
            return "FizzBuzz";
        }
        if (input % 3 === 0) {
            return "Fizz";
        }
        if (input % 5 === 0) {
            return "Buzz";
        }
        else {
            return input
        }
    },
    /*
    this generator to generate the number of 1 at 100
     and uses the first function to replace the multiple of 3 by "Fizz"
     and the multiple of 5 by "Buzz" and the multiple two-by "FizzBuzz"
    */
    Generetor: function () {
        var arr = [];
        for (i = 1; i < 101; i++) {
            arr.push(this.firstGenaration(i));
        }
        return arr;
    }

};

module.exports = checkerFizzBuzz;