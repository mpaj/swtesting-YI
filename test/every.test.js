import every from '../COMP.SE.200-2024-2025-1/src/every.js';
import { expect } from 'chai';

describe("every", function() {

    it("should return False for isNaN against an array of numbers", function() {
        function testF(value, index, array) {
            return !isNaN(value);
        };

        expect(every([0,1,2,3,4,5,6,7,8,9,10],testF)).to.eq(true);
        expect(every([-1,-2,-3,-10,-20,-10000, -1000000], testF)).to.eq(true);
    });
    it("should stop and return False for typeof check if there are values of differing types in array", function() {
        function testF(value, index, array) {
            return (typeof value === 'number')
        };
        expect(every([2,4,"teststr",7,10], testF)).to.equal(false);
    });
    it("should return True for an empty array and empty predicate", function() {
        expect(every([])).to.equal(true);
    });
    it("should return True for an empty array with simple predicate", function() {
        function testF(value, index, array) {
            return (typeof value === 'number')
        };
        expect(every([], testF)).to.equal(true);
    });
});