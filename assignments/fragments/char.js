/**
 * Automata Theory. Building a RegExp machine.
 *
 * Assignment 2: implement Single character NFA fragment.
 *
 * Video lecture: https://www.youtube.com/watch?v=_AK_ldfOQB0
 *
 * by Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const NFA = require('../NFA');

/**
 * Factory function for a single character NFA.
 */
function char(symbol) {
  // Implement here...
}

// -----------------------------------------------------------------------------
// Test cases

// Your assignment is to implement `char` factory function,
// and make sure all assertions below pass.

const assert = require('assert');

function runTests() {
  const a = char('a');

  assert.equal(a.inState.accepting, false);
  assert.equal(a.outState.accepting, true);

  const transition = a.getTransitionsForSymbol('a');

  assert.equal(transitions.size, 1);
  assert.equal(transitions.has(a.outState), true);
}

if (require.main === module) {
  runTests();
  console.log('All assertions passed!');
}

module.exports = char;