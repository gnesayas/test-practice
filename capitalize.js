function capitalize(text) {
  if (text) {
    return text[0].toUpperCase() + text.slice(1);
  }
  return text;
}

module.exports = capitalize;
