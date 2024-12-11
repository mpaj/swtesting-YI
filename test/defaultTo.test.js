import defaultTo from "../COMP.SE.200-2024-2025-1/src/defaultTo.js";
import { expect } from "chai";

describe('defaultTo', function() {

    it('should return the value if value is acceptable', function() {
        expect(defaultTo(5, 0)).to.equal(5);
        expect(defaultTo(7, 0)).to.equal(7);
        expect(defaultTo("teststr", "defaultstr")).to.equal("teststr");
        expect(defaultTo("", "defaultstr")).to.equal("");
    });

    it('should return the default value if value is null', function() {
        expect(defaultTo(null, 0)).to.equal(0);
        expect(defaultTo(null, "defaultstr")).to.equal("defaultstr");
    });

    it('should return the default value if value is NaN', function() {
        expect(defaultTo(NaN, 0)).to.equal(0);
        expect(defaultTo(NaN, "defaultstr")).to.equal("defaultstr");
    });

    it('should return the default value if value is undefined', function() {
        expect(defaultTo(undefined, 0)).to.equal(0);
        expect(defaultTo(undefined, "defaultstr")).to.equal("defaultstr");
    });
});