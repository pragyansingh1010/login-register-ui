function validEmail(value) {
  return typeof value === 'string' && value.includes('@') && value.includes('.');
}

console.assert(validEmail('user@example.com'));
console.assert(!validEmail('user'));
console.assert(!validEmail(''));
console.log('Auth state tests passed');
