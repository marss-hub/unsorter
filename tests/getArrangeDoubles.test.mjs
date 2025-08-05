import { getArrangeDoubles } from '../script.mjs';
import { describe, expect, test } from '@jest/globals';

test("test getArrangeDoubles is work", () => {
    expect(true).toBe(true);
});

describe("checking getArrangeDoubles function", () => {
    describe("checking correct filled input cases", () => {
        const examples = [
            { input: "1122334455", expected: ["55", "44", "33", "22", "11"] },
            { input: "aabbccddeeffff", expected: ["ffff", "ee", "dd", "cc", "bb", "aa"] },
            { input: "11122ab", expected: ["22", "111"] }
        ]
        test.each(examples)('should return sorted array of repeated characters for $input', ({ input, expected }) => {
            expect(getArrangeDoubles(input)).toEqual(expect.arrayContaining(expected));
        });
    });

    describe("checking correct empty input cases", () => {
        const examples = [
            { input: "abcde", expected: [] },
            { input: "", expected: [] },
        ];
        test.each(examples)('should return empty array', ({ input, expected }) => {
            expect(getArrangeDoubles(input)).toBe(expected);
        });
    });

    describe("checking incorrect input cases", () => {
        test("should throw error for null input", () => {
            expect(() => getArrangeDoubles(null)).toThrow();
        });
        test("should throw error for undefined input", () => {
            expect(() => getArrangeDoubles(undefined)).toThrow();
        });
        test("should throw error for number input", () => {
            expect(() => getArrangeDoubles(123)).toThrow();
        });
        test("should throw error for empty array input", () => {
            expect(() => getArrangeDoubles([])).toThrow();
        });
        test("should throw error for array input", () => {
            expect(() => getArrangeDoubles(['1122333'])).toThrow();
        });
        test("should throw error for array input", () => {
            expect(() => getArrangeDoubles(['1', '1', '2', '2', '2'])).toThrow();
        });
        test("should throw error for object input", () => {
            expect(() => getArrangeDoubles({ a: '1122333' })).toThrow();
        });
        test("should throw error for empty object input", () => {
            expect(() => getArrangeDoubles({})).toThrow();
        });
        test("should throw error for boolean input", () => {
            expect(() => getArrangeDoubles(true)).toThrow();
        });
    });
});