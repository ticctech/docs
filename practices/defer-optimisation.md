# Defer Optimisation

> The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming. — Donald Knuth, American computer scientist

Premature optimisation is the focus on making improvements before it is appropriate to do so. It neatly encapsulates the act of trying to make something more efficient at a point where it is too early to do so.

This focus on trying to improve make something more _efficient_ before proving it's _effectiveness_ comes at the expense of more important tasks.

Donald Knuth posits that optimisation in the early stages of software development is detrimental to success almost all the time.

First, write legible, functional code. Second, optimise said code if, and when, there is a genuine issue.

This doesn't approach doesn't just apply to performance, it can (and should) be applied to abstraction, layering, testing (including unit tests), centralising code into functions and libraries, etc, etc.
