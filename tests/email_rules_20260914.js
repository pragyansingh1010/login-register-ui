function validEmail(email) {
  return typeof email === 'string' && email.includes('@') && email.includes('.');
}

console.assert(validEmail('user@example.com'));
console.assert(!validEmail('userexample.com'));
console.assert(!validEmail(''));
console.log('Email rules passed');
