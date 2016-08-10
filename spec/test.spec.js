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
    it("shoulde returne numbers from 1 to 100 but Fizz in place the 3 and Buzz in place the 5 ",function () {

        var expected1 ="Fizz";
        var expected2 ="Buzz";
        var actual= Generetor.Genarator();
        expect(actual[2]).to.eql(expected1);
        expect(actual[4]).to.eql(expected2);
    } );
    
    
    //Second Version

    it("shoulde returne 1 when the function start the 15", function () {
        var input=15;
        var expected ="FizzBuzz";
        var actual= Generetor.firstGenaration(input);
        expect(actual).to.eql(expected);
    });

    it("shoulde returne numbers from 1 to 100 but Fizz in place the 3 and Buzz in place the 5 and in the multiple of both three and five FizzBuzz ",function () {

        var expected1 ="Fizz";
        var expected2 ="Buzz";
        var expected3="FizzBuzz";

        var actual= Generetor.Genarator();
        expect(actual[2]).to.eql(expected1);
        expect(actual[4]).to.eql(expected2);
        expect(actual[14]).to.eql(expected3);

    } );
    
    

});