// Pure functions
function square(x) {
  return x * x;
}
function squareAll(items) {
  return items.map(square);
}

// Impure functions
function square(x) {
  updateXInDatabase(x);
  return x * x;
}
function squareAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}