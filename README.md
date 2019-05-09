# Automata Theory. Building a RegExp machine

This repo contains assignments for the [Automata Theory. Building a RegExp machine machine](https://www.youtube.com/playlist?list=PLGNbPb3dQJ_4YjExEWguwgd1iWUjWvybc) class, where we study Theory of Computation on the practical example of implementing a Regular Expressions machine.

In the class you will learn:

- RegExp history
- Formal grammars: G = (N, T, P, S)
- Regular grammars: Type 3
- Finite automata FA = (Q, Σ, Δ, q0, F)
- NFA, ε-NFA, DFA
- Basic NFA fragments for RegExp
- Single Character and Epsilon-machines
- Concatenation pattern
- Union pattern
- Kleene-closure
- Complex machines
- Syntactic sugar
- NFA optimizations
- NFA acceptor
- NFA table
- DFA table
- DFA minimization
- RegExp match

In addition, implementing a RegExp machine might be a non-trivial task, so building such a machine will definitely make you a better engineer, with transferable knowledge of different data structures and algorithms, which you'll be able to use in other parts of your career.

## Assignments

Assignments are implemented in Node.js. After installing, you can test and run e.g. as:

```
node assignments/State.js

> All assertions passed!
```

- [Implement FA State class](https://github.com/DmitrySoshnikov/at-regexp-machine/tree/master/assignments/State.js)