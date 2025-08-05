import { mainMix } from '../script.mjs';
import { describe, expect, test } from '@jest/globals';

test("test mainMix is work", () => {
    expect(true).toBe(true);
});

describe("checking mainMix function", () => {

    describe("checking correct input cases", () => {
        describe("should return mixed string", () => {
            describe("string with odd length", () => {
                const examples = [
                    { input: "112234555", expected: "512354215" },
                    { input: "111aa", expected: "1a1a1" },
                    { input: "aabbcdeee", expected: "eabcedbae" }
                ];
                test.each(examples)('should return mixed string for $input', ({ input, expected }) => {
                    expect(mainMix(input)).toBe(expected);
                });
            });

            describe("string with even length", () => {
                const examples = [
                    { input: "1123", expected: "1231" },
                    { input: "aabc", expected: "abca" }
                ];
                test.each(examples)('should return mixed string for $input', ({ input, expected }) => {
                    expect(mainMix(input)).toBe(expected);
                });
            });
        });

        describe("should return string without changes", () => {
            const examples = [
                { input: "", expected: "" },
                { input: "a", expected: "a" },
                { input: "aaa", expected: "aaa" },
                { input: "a123", expected: "a123" }
            ];
            test.each(examples)('should return same string for $input', ({ input, expected }) => {
                expect(mainMix(input)).toBe(expected);
            });
        });
    });

    describe("checking incorrect input cases", () => {
        test("should throw error for null input", () => {
            expect(() => mainMix(null)).toThrow();
        });
        test("should throw error for undefined input", () => {
            expect(() => mainMix(undefined)).toThrow();
        });
        test("should throw error for number input", () => {
            expect(() => mainMix(123)).toThrow();
        });
        test("should throw error for array input", () => {
            expect(() => mainMix(["a", "b", "c", "c"])).toThrow();
        });
        test("should throw error for array input", () => {
            expect(() => mainMix(["abcc"])).toThrow();
        });
        test("should throw error for empty array input", () => {
            expect(() => mainMix([])).toThrow();
        });
        test("should throw error for object input", () => {
            expect(() => mainMix({ a: 1, b: 2 })).toThrow();
        });
        test("should throw error for empty object input", () => {
            expect(() => mainMix({})).toThrow();
        });
    });
});


