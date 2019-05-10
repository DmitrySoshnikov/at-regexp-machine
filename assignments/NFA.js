/**
 * Automata Theory. Building a RegExp machine.
 *
 * Video lecture: https://www.youtube.com/watch?v=_AK_ldfOQB0
 *
 * by Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

/**
 * NFA class. Encapsulates input and output states.
 *
 * The `test` function, which actually tests whether this
 * machine accepts a string or not, is just a thin
 * wrapper on top of the `test` method of the input state.
 */
class NFA {
  constructor(inState, outState) {
    this.inState = inState;
    this.outState = outState;
  }

  /**
   * Tests whether this NFA matches the
   * string. Delegates to the input state.
   */
  test(string) {
    return this.inState.test(string);
  }
}

module.exports = NFA;