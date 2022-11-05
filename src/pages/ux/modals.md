---
description: When it's OK to use modals (popups)
---

# Modals

In general we want to avoid using modal forms. They can cause loss of context for the user and create problems with sizing and scrolling for different viewports.

There are a few exceptions where a popup makes sense.

* When the user interaction is very limited - preferably one click
* When the modal can fill the whole viewport on a mobile device. That is, "take over" the screen.
* Where the user is drilling in to an action/data that is an aside or related to the main screen's context but is not core to it.

Examples that have been identified in our app so far:

* Liveness check
* ID scan
