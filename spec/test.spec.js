var checkerFizzBuzz = require('../lib/generetorNumbre');
var expect = require('chai').expect;
var firstAndSecondMultiple=[3,5];

'use strict'

describe("generator the numbers from 1 to 100", function() {

    it("should exist", function () {

        expect(checkerFizzBuzz).to.not.be.undefined;
    });
    it("should return 1 when the function start the 1", function () {
        var input=1;
        var expected =1;
        var actual= checkerFizzBuzz.firstGenaration(input,firstAndSecondMultiple);
        expect(actual).to.eql(expected);
    });
    it("should return same number when the input is note a multiple of 3 or 5", function () {
        expect(checkerFizzBuzz.firstGenaration(1,firstAndSecondMultiple)).to.eql(1);
        expect(checkerFizzBuzz.firstGenaration(2,firstAndSecondMultiple)).to.eql(2);
        expect(checkerFizzBuzz.firstGenaration(4,firstAndSecondMultiple)).to.eql(4);
    });

    it("should return Fizz when the input is a multiple of 3",function () {
        var expected ="Fizz";
        expect(checkerFizzBuzz.firstGenaration(3,firstAndSecondMultiple)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(6,firstAndSecondMultiple)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(9,firstAndSecondMultiple)).to.eql(expected);


    } );
    it("should return Buzz when the input is a multiple of 5",function () {
        var expected ="Buzz";
        expect(checkerFizzBuzz.firstGenaration(5,firstAndSecondMultiple)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(10,firstAndSecondMultiple)).to.eql(expected);

    } );
    //function generator frome 1 to 100
    it("should return numbers from 1 to 100 but Fizz in place the 3 and Buzz in place the 5 ",function () {

        var expected1 ="Fizz";
        var expected2 ="Buzz";
        var actual= checkerFizzBuzz.Generetor(firstAndSecondMultiple);
        expect(actual[2]).to.eql(expected1);
        expect(actual[5]).to.eql(expected1);
        expect(actual[4]).to.eql(expected2);
        expect(actual[9]).to.eql(expected2);

    } );

    //Second Version

    it("should return 1 when the function start the 15", function () {
        var expected ="FizzBuzz";        ;
        expect(checkerFizzBuzz.firstGenaration(15,firstAndSecondMultiple)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(30,firstAndSecondMultiple)).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(45,firstAndSecondMultiple)).to.eql(expected);
    });

    it("should return numbers from 1 to 100 but Fizz in place the 3 and Buzz in place the 5 and in the multiple of both three and five FizzBuzz ",function () {
        var expected1 ="Fizz";
        var expected2 ="Buzz";
        var expected3="FizzBuzz";
        var actual= checkerFizzBuzz.Generetor(firstAndSecondMultiple);
        expect(actual[2]).to.eql(expected1);
        expect(actual[4]).to.eql(expected2);
        expect(actual[14]).to.eql(expected3);
    } );

    it("should return 100",function () {
        expect(checkerFizzBuzz.Generetor(firstAndSecondMultiple).length).to.eql(100)
    });

    //3 eme Version

    it("should return Fizz when the input is a multiple of 2 ",function () {
        var expected ="Fizz";
        expect(checkerFizzBuzz.firstGenaration(2,[2,null])).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(4,[2,null])).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(6,[2,null])).to.eql(expected);
    });
    it("should return Buzz when the input is a multiple of 9",function () {
        var expected ="Buzz";
        expect(checkerFizzBuzz.firstGenaration(9,[null,9])).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(18,[null,9])).to.eql(expected);
        expect(checkerFizzBuzz.firstGenaration(27,[null,9])).to.eql(expected);
    } );


});