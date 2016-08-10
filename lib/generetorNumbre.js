var Generetor;

Generetor = {
    firstGenaration: function (input) {
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

    Genarator1to6:function () {
        var arr=[];
        for(i=1;i<7;i++){
            arr.push(this.firstGenaration(i));
        }
        return arr;
    },
    Genarator:function () {
        var arr=[];
        for(i=1;i<101;i++){
            arr.push(this.firstGenaration(i));
        }
        return arr;
    }


};

module.exports = Generetor;