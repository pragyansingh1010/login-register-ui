function cleanEmail(value) {
  return value.trim().toLowerCase();
}

console.assert(cleanEmail(' User@Example.COM ') === 'user@example.com');
console.assert(cleanEmail('TEST@MAIL.COM') === 'test@mail.com');
console.log('Email cleanup passed');
