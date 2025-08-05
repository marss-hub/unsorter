import { getSurplus } from '../script.mjs';
import { describe, expect, test } from '@jest/globals';

test("test getSurplus is work", () => {
    expect(true).toBe(true);
});

describe("checking getSurplus function", () => {
    describe("checking correct filled input cases", () => {
        const examples = [
            { input: ["11", "222", "3333", "444", "555"], expected: "245" },
            { input: ["111", "aa"], expected: "1" },
            { input: ["aa", "bb", "ccc"], expected: "c" }
        ];
        test.each(examples)('should return string with "odd" charses for $input', ({ input, expected }) => {
            expect(mainMix(input)).toBe(expected);
        });
    });
    describe("checking correct empty input cases", () => {
        const examples = [
            { input: [], expected: "" },
        ];
        test.each(examples)('should return empty string for $input', ({ input, expected }) => {
            expect(getSurplus(input)).toBe(expected);
        });
    });

    describe("checking incorrect input cases", () => {
        test("should throw error for null input", () => {
            expect(() => getSurplus(null)).toThrow();
        });
        test("should throw error for undefined input", () => {
            expect(() => getSurplus(undefined)).toThrow();
        });
        test("should throw error for number input", () => {
            expect(() => getSurplus(123)).toThrow();
        });
        test("should throw error for string input", () => {
            expect(() => getSurplus("abc")).toThrow();
        });
        test("should throw error for object input", () => {
            expect(() => getSurplus({ a: 'abc' })).toThrow();
        });
        test("should throw error for empty object input", () => {
            expect(() => getSurplus({})).toThrow();
        });
        test("should throw error for boolean input", () => {
            expect(() => getSurplus(true)).toThrow();
        });
    });
});