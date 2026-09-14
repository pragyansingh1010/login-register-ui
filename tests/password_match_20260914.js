function passwordsMatch(first, second) {
  return first === second;
}

console.assert(passwordsMatch('secret', 'secret'));
console.assert(!passwordsMatch('secret', 'Secret'));
console.assert(!passwordsMatch('123456', '123457'));
console.log('Password match rules passed');
