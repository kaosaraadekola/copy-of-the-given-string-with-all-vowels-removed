import { removingVowels } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("removing the vowels from hello", () => {
    expect(removingVowels("Hello")).toEqual("Hll");
});

test("removing the vowels from naz", () => {
    expect(removingVowels("naz")).toEqual("nz");
});

test("removing the vowels from huss", () => {
    expect(removingVowels("huss")).toEqual("hss");
});

test("removing the vowels from It's Monday today", () => {
    expect(removingVowels("It's Monday today")).toEqual("t's Mndy tdy");
});

test("removing the vowels from ", () => {
    expect(removingVowels("")).toEqual("");
});
