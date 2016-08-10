var Generetor;

Generetor = {
    firstGenaration: function (input) {
        if (input % 3 === 0) {
            return "Fizz";
        }
        else {
            return input
        }
    }

};

module.exports = Generetor;