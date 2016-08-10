var Generetor = require('../lib/generetorNumbre');
'use strict'

var expect = require('chai').expect;
describe("generator the numbers from 1 to 100", function() {

    it("should exist", function () {

        expect(Generetor).to.not.be.undefined;
    });
    it("shoulde returne 1 when the function start the 1", function () {
        var input=1;
        var expected =1;
        var actual= Generetor.firstGenaration(input);
        expect(actual).to.eql(expected);
    });

    it("shoulde returne Fizz when the inpute is 3",function () {
        var input=3;
        var expected ="Fizz";
        var actual= Generetor.firstGenaration(input);
        expect(actual).to.eql(expected);
    } );
    it("shoulde returne Buzz when the inpute is 5",function () {
        var input=5;
        var expected ="Buzz";
        var actual= Generetor.firstGenaration(input);
        expect(actual).to.eql(expected);
    } );
    //function generator frome 1 to 100
    it("shoulde returne numbers from 1 to 6 but Fizz in place the 3 and Buzz in place the 5 ",function () {

        var expected =[1,2,"Fizz",4,"Buzz","Fizz"];
        var actual= Generetor.Genarator1to6();
        expect(actual).to.eql(expected);

    } );

});