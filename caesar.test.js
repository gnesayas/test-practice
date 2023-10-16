const caesarCipher = require('./caesar');

test("shift by positive amount", () => {
    expect(caesarCipher('word', 3)).toBe('zrug');
});

test("shift by negative amount", () => {
    expect(caesarCipher('word', -3)).toBe('tloa');
});

test("cipher wraps from z to a correctly", () => {
    expect(caesarCipher('zoo', 3)).toBe('crr');
});

test("cipher wraps from a to z correctly", () => {
    expect(caesarCipher('apple', -3)).toBe('xmmib');
});

test("cipher works with capital letters in positive shift", () => {
    expect(caesarCipher('Tony', 3)).toBe('Wrqb');
});

test("cipher works with capital letters in negative shift", () => {
    expect(caesarCipher('cArs', -3)).toBe('zXop');
});

test("shift ending in a works", () => {
    expect(caesarCipher('Xar', 3)).toBe('Adu');
});

test("Punctuation is not shifted", () => {
    expect(caesarCipher('Boo!?.', 3)).toBe('Err!?.');
});