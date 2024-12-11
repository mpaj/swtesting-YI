import words from "../COMP.SE.200-2024-2025-1/src/words.js";
import { expect } from "chai";

describe('words', function() {
    it('should return an array of words from a string', function() {
        expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles']);
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.eql(['fred', 'barney', '&', 'pebbles']);
    });

    it('should return an empty array if the input string is empty', function() {
        expect(words('')).to.eql([]);
    });

    it('should return an array with one element if the input string has one word', function() {
        expect(words('test')).to.eql(['test']);
    });

    it('should return an array with one element if the input string has one word and the pattern is given', function() {
        expect(words('test', /[^, ]+/g)).to.eql(['test']);
    });
});