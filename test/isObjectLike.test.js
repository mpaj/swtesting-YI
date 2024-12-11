import { expect } from "chai";
import isObjectLike from "../COMP.SE.200-2024-2025-1/src/isObjectLike.js";


describe("isObjectLike", function() {

    it("should detect an empty object", function() {
        expect(isObjectLike({})).to.eq(true);
    });
    it("should return true to a created object", function() {
        const obj = {"foo":"bar"};
        expect(isObjectLike(obj)).to.eq(true);
    });
    it("should return true to a custom class object", function() {
        class testClass {};
        const instance = new testClass();
        expect(isObjectLike(instance)).to.eq(true);
    });

    it("should return true to array", function() {
        expect(isObjectLike(["test1", "test2"])).to.eq(true);
    });
    it("should return false to a string", function() {
        expect(isObjectLike("teststr")).to.eq(false);
    });

    it("should return true to a Date instance", function() {
        const date = new Date();
        expect(isObjectLike(date)).to.eq(true);
    });
    it("should return false to Date constuctor", function() {
        expect(isObjectLike(Date('1995-12-17T03:24:00'))).to.eq(false);
    });

    it("should return false to a Function", function() {
        // functions are objects, yet return "Function" as their typeof. Feature, not a bug.
        expect(isObjectLike(function () {})).to.eq(false);
    });

    it("should return true to RegEx", function() {
        const regex = /123/;
        expect(isObjectLike(regex)).to.eq(true);
    });
    it("should return true to a Map", function() {
        const map = new Map();
        expect(isObjectLike(map)).to.eq(true);
    });
    it("should return true to an Error", function() {
        const testerror = new Error("testerror");
        expect(isObjectLike(testerror)).to.eq(true);
    });
    it("should return true to an Error created inline", function() {
        //const testerror = new Error("testerror");
        expect(isObjectLike(Error("testerror"))).to.eq(true);
    });
    
    it("should return false to null", function() {
        // historical 
        expect(isObjectLike(null)).to.eq(false);
    });

});