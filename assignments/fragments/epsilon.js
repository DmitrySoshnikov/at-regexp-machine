/**
 * Automata Theory. Building a RegExp machine.
 *
 * Assignment 3: implement Epsilon NFA fragment.
 *
 * Video lecture: https://www.youtube.com/watch?v=_AK_ldfOQB0
 *
 * by Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const NFA = require('../NFA');

/**
 * Factory function for a single character NFA.
 */
function epsilon(symbol) {
  // Implement here...
}

/ -----------------------------------------------------------------------------
// Test cases

// Your assignment is to implement `char` factory function,
// and make sure all assertions below pass.

const assert = require('assert');

function runTests() {
  const e = epsilon('a');

  assert.equal(e.inState.accepting, false);
  assert.equal(e.outState.accepting, true);
}

if (require.main === module) {
  runTests();
  console.log('All assertions passed!');
}

module.exports = epsilon;