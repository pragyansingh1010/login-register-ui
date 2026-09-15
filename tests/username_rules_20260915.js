function validUsername(value) {
  return value.trim().length >= 3;
}

console.assert(validUsername('pragyan'));
console.assert(!validUsername('ab'));
