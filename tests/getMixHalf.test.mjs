import { getMixHalf } from '../script.mjs';
import { describe, expect, test } from '@jest/globals';

test("test getMixHalf is work", () => {
    expect(true).toBe(true);
});

describe("checking getMixHalf function", () => {
    describe("checking correct filled input cases", () => {
        const examples = [
            { input: ["11", "222", "33"], expected: "1231232" },
            { input: ["aa", "bb", "cc"], expected: "abcabc" },        ];
        test.each(examples)('should return mixed string for $input', ({ input, expected }) => {
            expect(getMixHalf(input)).toBe(expected);
        });
    });

    describe("checking correct empty input cases", () => {
        const examples = [
            { input: [], expected: "" },
        ];
        test.each(examples)('should return empty string for $input', ({ input, expected }) => {
            expect(getMixHalf(input)).toBe(expected);
        });
    });

    describe("checking incorrect input cases", () => {
        test("should throw error for null input", () => {
            expect(() => getMixHalf(null)).toThrow();
        });
        test("should throw error for undefined input", () => {
            expect(() => getMixHalf(undefined)).toThrow();
        });
        test("should throw error for number input", () => {
            expect(() => getMixHalf(123)).toThrow();
        });
        test("should throw error for array input with single items", () => {
            expect(() => getMixHalf(["a", "b", "c"])).toThrow();
        });
        test("should throw error for array input without sorted items", () => {
            expect(() => getMixHalf(["abc", "b12", "c45"])).toThrow();
        });
        test("should throw error for object input", () => {
            expect(() => getMixHalf({ a: 'abc' })).toThrow();
        });
        test("should throw error for empty object input", () => {
            expect(() => getMixHalf({})).toThrow();
        });
        test("should throw error for boolean input", () => {
            expect(() => getMixHalf(true)).toThrow();
        });
    });
});