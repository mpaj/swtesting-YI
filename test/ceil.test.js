import ceil from "../COMP.SE.200-2024-2025-1/src/ceil.js";
import { expect } from "chai";

describe('ceil', function() {

    it('should return an integer unchanged', function() {
        expect(ceil(3)).to.equal(3);
        expect(ceil(302)).to.eq(302);
        expect(ceil(7,5)).to.eq(7);
    });
    it('should round up with 0 precision', function() {
        expect(ceil(3.0008)).to.eq(4);
        expect(ceil(0.009)).to.eq(1);
    });
    it('should round up with 1 precision', function() {
        expect(ceil(3.0008,1)).to.eq(3.1);
        expect(ceil(0.009,1)).to.eq(0.1);
    });
    it('should round up with 2 precision', function() {
        expect(ceil(3.0008,2)).to.eq(3.01);
        expect(ceil(0.009,2)).to.eq(0.01);
    });
    it('should round up with 3 precision', function() {
        expect(ceil(3.0008,2)).to.eq(3.001);
        expect(ceil(0.009,2)).to.eq(0.1);
    });
    it('should round up with negative precision', function() {
        expect(ceil(3.0008,-1)).to.eq(10);
        expect(ceil(0.009,-1)).to.eq(10);
        expect(ceil(6420, -2)).to.eq(6500);
    });
});