/**
 * Automata Theory. Building a RegExp machine.
 *
 * Assignment 1: implement FA State class.
 *
 * Video lecture: https://www.youtube.com/watch?v=vGEbvqpNlbc
 *
 * by Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

// -----------------------------------------------------------------------------

/**
 * The State class represents a state in a finite automata.
 */
class State {
  constructor({accepting = false}) {
    /**
     * Whether this state accepting or not.
     */
    this.accepting = accepting;

    /**
     * Transitions map: key is a transition symbol,
     * value - the Set of destination states for this symbol.
     */
    this.transitionsMap = new Map();
  }

  /**
   * Adds a transition for a symbol.
   */
  addTransitionForSymbol(symbol, state) {
    // Implement here...
  }

  /**
   * Returns a list of destination states for this symbol.
   */
  getTransitionsForSymbol(symbol) {
    // Implement here...
  }
}

// -----------------------------------------------------------------------------
// Test cases

// Your assignment is to implement `addTransitionForSymbol` and
// `getTransitionsForSymbol` methods above, and make sure all
// assertions below pass.

const assert = require('assert');

function runTests() {

  const s1 = new State({accepting: false});
  const s2 = new State({accepting: true});


  // Add transition on character 'a' from state
  // s1 to state s2:
  s1.addTransitionForSymbol('a', s2);

  const transitions = s1.getTransitionsForSymbol('a');

  // There should be only one transition, to the state s2.
  assert.equal(transitions.size, 1);
  assert.equal(transitions.has(s2), true);
}

if (require.main === module) {
  runTests();
  console.log('All assertions passed!');
}
