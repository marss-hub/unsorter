import { getOnes } from '../script.mjs';
import { describe, expect, test } from '@jest/globals';

test("test getOnes is work", () => {
    expect(true).toBe(true);
});

describe("checking getOnes function", () => {
    describe("checking correct filled input cases", () => {
        const examples = [
            { input: "11223455", expected: "34" },
            { input: "aaabbccddeeffghhhh", expected: "g" },
            { input: "11122ab", expected: "ab" },
            { input: "abcde", expected: "abcde" }
        ];
        test.each(examples)('should return string with unique characters for $input', ({ input, expected }) => {
            expect(getOnes(input)).toBe(expected);
        });
    });

    describe("checking correct empty input cases", () => {
        const examples = [
            { input: "", expected: "" },
        ];
        test.each(examples)('should return empty string', ({ input, expected }) => {
            expect(getOnes(input)).toBe(expected);
        });
    });

    describe("checking incorrect input cases", () => {
        test("should throw error for null input", () => {
            expect(() => getOnes(null)).toThrow();
        });
        test("should throw error for undefined input", () => {
            expect(() => getOnes(undefined)).toThrow();
        });
        test("should throw error for number input", () => {
            expect(() => getOnes(123)).toThrow();
        });
        test("should throw error for empty array input", () => {
            expect(() => getOnes([])).toThrow();
        });
        test("should throw error for array input", () => {
            expect(() => getOnes(['1122333'])).toThrow();
        });
        test("should throw error for array input", () => {
            expect(() => getOnes(['1', '1', '2', '2', '2'])).toThrow();
        });
        test("should throw error for object input", () => {
            expect(() => getOnes({ a: '1122333' })).toThrow();
        });
        test("should throw error for empty object input", () => {
            expect(() => getOnes({})).toThrow();
        });
        test("should throw error for boolean input", () => {
            expect(() => getOnes(true)).toThrow();
        });
    });
});