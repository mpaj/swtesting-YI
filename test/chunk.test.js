import chunk from '../COMP.SE.200-2024-2025-1/src/chunk.js';
import { expect } from 'chai';

describe('chunk', function() {
    it('should return an array of arrays', function() {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.eql([['a', 'b'], ['c', 'd']]);
        expect(chunk([1, 2, 3, 4], 2)).to.eql([[1, 2], [3, 4]]);
        expect(chunk([1, 2, 3, 4, 5], 2)).to.eql([[1, 2], [3, 4], [5]]);
        expect(chunk([1, 2, 3, 4, 5], 3)).to.eql([[1, 2, 3], [4, 5]]);
    });

    it('should return an empty array if the input array is empty', function() {
        expect(chunk([], 2)).to.eql([]);
    });

    it('should return an array with one element if the input array has one element', function() {
        expect(chunk([1], 2)).to.eql([[1]]);
    });

    it('should return an array with one element if the input array has one element and chunk size is 0', function() {
        expect(chunk([1], 0)).to.eql([]);
    });
});