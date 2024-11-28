import clamp from '../COMP.SE.200-2024-2025-1/src/clamp.js';
import { expect } from 'chai';

describe('clamp', function() {
    it('should clamp values within the inclusive lower and upper bounds', function() {
        expect(clamp(-10, -5, 5)).to.equal(-5)
        expect(clamp(10, -5, 5)).to.equal(5)
    })
    
    it('should work with a `lower` greater than `upper`', function() {
        expect(clamp(10, 5, -5)).to.equal(5)
        expect(clamp(-10, 5, -5)).to.equal(-5)
    })
    
    it('should clamp negative numbers', function() {
        expect(clamp(-10, -5, 5)).to.equal(-5)
        expect(clamp(-10, 5, -5)).to.equal(-5)
    })
    
    it('should clamp positive numbers', function() {
        expect(clamp(10, -5, 5)).to.equal(5)
        expect(clamp(10, 5, -5)).to.equal(5)
    })
    
    it('should not alter zero in any way', function() {
        expect(1 / clamp(0, -5, 5)).to.equal(Infinity)
        expect(1 / clamp(0, 5, -5)).to.equal(Infinity)
    })
    
    it('should clamp to `0` when `lower` and `upper` are `0`', function() {
        expect(1 / clamp(-5, 0, 0)).to.equal(Infinity)
        expect(1 / clamp(5, 0, 0)).to.equal(Infinity)
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
