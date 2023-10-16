const capitalize = require("./capitalize");

test("capitalize first letter of single word", () => {
    expect(capitalize("word")).toBe("Word");
});

test("capitalize first letter of multi-word phrase", () => {
    expect(capitalize("phrase to be capitalized")).toBe("Phrase to be capitalized");
});

test("return input if first letter is capitalized", () => {
    expect(capitalize("Word")).toBe("Word");
});

test("return input if first letter of multi-word phrase is capitalized", () => {
    expect(capitalize("Phrase to be capitalized")).toBe("Phrase to be capitalized");
});

test("returns input if input is empty string", () => {
    expect(capitalize("")).toBe("");
});

test("capitalize a single letter", () => {
    expect(capitalize("b")).toBe("B");
});

test("return input if input is single capital letter", () => {
    expect(capitalize("Z")).toBe("Z");
});