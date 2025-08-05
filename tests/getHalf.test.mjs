import { getHalf } from '../script.mjs';
import { describe, expect, test } from '@jest/globals';

test("test getHalf is work", () => {
    expect(true).toBe(true);
});

describe("checking getHalf function", () => {
    describe("checking correct filled input cases", () => {
        const examples = [
            { input: ["11", "222", "3333", "444", "555"], expected: ["1", "2","33", "4", "5"] },
            { input: ["111", "aa"], expected: ["1", "a"] },
            { input: ["aa", "bb", "ccc"], expected: ["a", "b", "c"] }
        ];
        test.each(examples)('should return array of half strings for $input', ({ input, expected }) => {
            expect(getHalf(input)).toEqual(expect.arrayContaining(expected));
        });
    });

    describe("checking correct empty input cases", () => {
        const examples = [
            { input: [], expected: "" },
        ];
        test.each(examples)('should return empty string for $input', ({ input, expected }) => {
            expect(getHalf(input)).toBe(expected);
        });
    });

    describe("checking incorrect input cases", () => {
        test("should throw error for null input", () => {
            expect(() => getHalf(null)).toThrow();
        });
        test("should throw error for undefined input", () => {
            expect(() => getHalf(undefined)).toThrow();
        });
        test("should throw error for number input", () => {
            expect(() => getHalf(123)).toThrow();
        });
        test("should throw error for string input", () => {
            expect(() => getHalf("aaa")).toThrow();
        });
        test("should throw error for empty string input", () => {
            expect(() => getHalf("")).toThrow();
        });
        test("should throw error for not sorted array input", () => {
            expect(() => getHalf(["abc"])).toThrow();
        });
        test("should throw error for object input", () => {
            expect(() => getHalf({ a: 'abc' })).toThrow();
        });
        test("should throw error for empty object input", () => {
            expect(() => getHalf({})).toThrow();
        });
        test("should throw error for boolean input", () => {
            expect(() => getHalf(true)).toThrow();
        });
    });
});