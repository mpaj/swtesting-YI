import capitalize from "../COMP.SE.200-2024-2025-1/src/capitalize.js";
import { expect } from "chai";

describe("capitalize", function() {
    it("should capitalize lowercase string", function() {
        expect(capitalize("teststr")).to.eq("Teststr");
    });
    it("should return capitalized string unchanged", function() {
        expect(capitalize("Teststr")).to.eq("Teststr");
    });
    it("should make other letter lowercase in TESTSTR", function() {
        expect(capitalize("TESTSTR")).to.eq("Teststr");
    });
    it("should handle special characters", function() {
        expect(capitalize("test#Str")).to.eq("Test#str");
    });
    it("should not capitalize characters if special character is nr.1", function() {
        expect(capitalize("#testStr")).to.eq("#teststr");
    });
})