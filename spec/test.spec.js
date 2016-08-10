var Generetor = require('../lib/generetorNumbre');
'use strict'

var expect = require('chai').expect;
describe("generator the numbers from 1 to 100", function() {

    it("should exist", function () {

        expect(Generetor).to.not.be.undefined;
    });
    it("shoulde returne 1 when the function start the 1 to 1", function () {
        var input=1;
        var expected =1;
        var actual= Generetor.firstGenaration(input);
        expect(actual).to.eql(expected);
    });

});