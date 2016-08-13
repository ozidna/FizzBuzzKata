var checkerFizzBuzz = require('../lib/generetorNumbre');
var expect = require('chai').expect;

'use strict'

describe("generator the numbers from 1 to 100", function() {

    it("should exist", function () {

        expect(checkerFizzBuzz).to.not.be.undefined;
    });
    it("shoulde returne 1 when the function start the 1", function () {
        var input=1;
        var expected =1;
        var actual= checkerFizzBuzz.firstGenaration(input);
        expect(actual).to.eql(expected);
    });
    it("shoulde returne same numbre when the input is note a multiple of 3 or 5", function () {
        expect(checkerFizzBuzz.firstGenaration(1)).to.eql(1);
        expect(checkerFizzBuzz.firstGenaration(2)).to.eql(2);
        expect(checkerFizzBuzz.firstGenaration(4)).to.eql(4);
    });

    it("shoulde returne Fizz when the inpute is a multiple of 3",function () {
        var expected ="Fizz";
        expect(checkerFizzBuzz.firstGenaration(3)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(6)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(9)).to.eql(expected);


    } );
    it("shoulde returne Buzz when the inpute is a multuple of 5",function () {
        var expected ="Buzz";
        expect(checkerFizzBuzz.firstGenaration(5)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(10)).to.eql(expected);

    } );
    //function generator frome 1 to 100
    it("shoulde returne numbers from 1 to 100 but Fizz in place the 3 and Buzz in place the 5 ",function () {

        var expected1 ="Fizz";
        var expected2 ="Buzz";
        var actual= checkerFizzBuzz.Generetor();
        expect(actual[2]).to.eql(expected1);
        expect(actual[5]).to.eql(expected1);
        expect(actual[4]).to.eql(expected2);
        expect(actual[9]).to.eql(expected2);

    } );

    //Second Version

    it("shoulde returne 1 when the function start the 15", function () {
        var expected ="FizzBuzz";        ;
        expect(checkerFizzBuzz.firstGenaration(15)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(30)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(45)).to.eql(expected);
    });

    it("shoulde returne numbers from 1 to 100 but Fizz in place the 3 and Buzz in place the 5 and in the multiple of both three and five FizzBuzz ",function () {
        var expected1 ="Fizz";
        var expected2 ="Buzz";
        var expected3="FizzBuzz";
        var actual= checkerFizzBuzz.Generetor();
        expect(actual[2]).to.eql(expected1);
        expect(actual[4]).to.eql(expected2);
        expect(actual[14]).to.eql(expected3);
    } );

    it("shoulde return 100",function () {
        expect(checkerFizzBuzz.Generetor().length).to.eql(100)
    })
       

});