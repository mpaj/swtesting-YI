import clamp from '../COMP.SE.200-2024-2025-1/src/clamp.js';
import { expect } from 'chai';

describe('clamp', function() {
    it('should clamp values within the inclusive lower and upper bounds', function() {
        expect(clamp(-10, -5, 6)).to.equal(-5)
        expect(clamp(10, -5, 6)).to.equal(6)
    })
    
    it('should work with a `lower` greater than `upper`', function() {
        expect(clamp(10, 5, -5)).to.equal(5)
        expect(clamp(-10, 5, -5)).to.equal(-5)
    })
    
    it('should not alter zero in any way', function() {
        expect(clamp(0, -5, 5)).to.equal(0)
        expect(clamp(0, 5, -5)).to.equal(0)
    })
    
    it('should clamp to `0` when `lower` and `upper` are `0`', function() {
        expect(clamp(-5, 0, 0)).to.equal(0)
        expect(clamp(5, 0, 0)).to.equal(0)
    })
    
    it('should coerce `lower` and `upper` to numbers', function() {
        expect(clamp(0, '1', '2')).to.equal(1)
        expect(clamp(0, '1', 2)).to.equal(1)
        expect(clamp(0, 1, '2')).to.equal(1)
        expect(clamp(0, '1', '2')).to.equal(1)
    })
    
    it('should return `NaN` when `number` is `NaN`', function() {
        expect(clamp(NaN, 0, 0)).to.be.NaN
    })
});
