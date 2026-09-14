function validPassword(value) {
  return typeof value === 'string' && value.length >= 6;
}

console.assert(validPassword('secret'));
console.assert(validPassword('123456'));
console.assert(!validPassword('12345'));
console.assert(!validPassword(''));
console.log('Password rules passed');
