// Closure
function outer(x) {
    // nested function is a closure
  function inner(y) {
    return x + y;
  }
  return inner;
}
const outerReturn = outer(10);

outerReturn(10);

// callback function


