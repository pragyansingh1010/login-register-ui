function validEmail(value) {
  return typeof value === 'string' && value.includes('@') && value.includes('.');
}

console.assert(validEmail('user@example.com'));
console.assert(!validEmail('user'));
console.assert(!validEmail('example.com'));
console.log('Email rules passed');
