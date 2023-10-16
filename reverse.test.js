const reverseString = require('./reverse');

test("returns input if input is empty string", () => {
    expect(reverseString("")).toBe("");
});

test("returns single word input reversed", () => {
    expect(reverseString("word")).toBe("drow");
});

test("returns multi word input reversed", () => {
    expect(reverseString("words reversed")).toBe("desrever sdrow");
});

test("returns single capitalized word input reversed", () => {
    expect(reverseString("Word")).toBe("droW");
});

test("returns capitalized multi word phrase reversed", () => {
    expect(reverseString("Words Reversed")).toBe("desreveR sdroW");
});

test("works on palindromes", () => {
    expect(reverseString("bob")).toBe("bob");
});

test("works with non letter characters", () => {
    expect(reverseString("w$e.i5/r!d")).toBe("d!r/5i.e$w");
});