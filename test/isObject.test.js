import { expect } from "chai";
import isObject from "../COMP.SE.200-2024-2025-1/src/isObject.js";


describe("isObject", function() {

    it("should detect an empty object", function() {
        expect(isObject({})).to.eq(true);
    });
    it("should return true to a created object", function() {
        const obj = {"foo":"bar"};
        expect(isObject(obj)).to.eq(true);
    });
    it("should return true to a custom class object", function() {
        class testClass {};
        const instance = new testClass();
        expect(isObject(instance)).to.eq(true);
    });

    it("should return true to array", function() {
        expect(isObject(["test1", "test2"])).to.eq(true);
    });
    it("should return false to a string", function() {
        expect(isObject("teststr")).to.eq(false);
    });

    it("should return true to a Date instance", function() {
        const date = new Date();
        expect(isObject(date)).to.eq(true);
    });
    it("should return false to Date constuctor", function() {
        expect(isObject(Date('1995-12-17T03:24:00'))).to.eq(false);
    });

    it("should return true to a Function", function() {
        // functions are objects
        expect(isObject(function () {})).to.eq(true);
    });

    it("should return true to RegEx", function() {
        const regex = /123/;
        expect(isObject(regex)).to.eq(true);
    });
    it("should return true to a Map", function() {
        const map = new Map();
        expect(isObject(map)).to.eq(true);
    });
    it("should return true to an Error", function() {
        const testerror = new Error("testerror");
        expect(isObject(testerror)).to.eq(true);
    });
    it("should return true to an Error created inline", function() {
        //const testerror = new Error("testerror");
        expect(isObject(Error("testerror"))).to.eq(true);
    });
    
    it("should return false to null", function() {
        // historical 
        expect(isObject(null)).to.eq(false);
    });

});