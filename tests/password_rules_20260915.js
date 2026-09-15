function validPassword(value) {
  return value.length >= 6;
}

console.assert(validPassword('abcdef'));
console.assert(!validPassword('abc'));
