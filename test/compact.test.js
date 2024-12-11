import compact from "../COMP.SE.200-2024-2025-1/src/compact.js";
import { expect } from "chai";

describe('compact', function() {
    it('should remove all falsey values from the array', function() {
        expect(compact([0, 1, false, 2, '', 3])).to.eql([1, 2, 3]);
        expect(compact([0, 1, false, 2, '', '3', null, undefined, NaN])).to.eql([1, 2, '3']);
    });

    it('should return an empty array if all values are falsey', function() {
        expect(compact([0, false, '', null, undefined, NaN])).to.eql([]);
    });

    it('should return an empty array if the input array is empty', function() {
        expect(compact([])).to.eql([]);
    });

    it('should return the original array if all values are truthy', function() {
        expect(compact([1, 'test', true])).to.eql([1, 'test', true]);
    });
});