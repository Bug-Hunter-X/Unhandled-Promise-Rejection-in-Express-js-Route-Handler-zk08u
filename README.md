# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js Express applications:  unhandled promise rejections within asynchronous route handlers.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

The `doSomethingAsync` function simulates an asynchronous operation that may throw an error.  However, the original `bug.js` lacks proper error handling within the `.catch` block of the route handler's promise chain.  This means that if `doSomethingAsync` throws an error, it will not be caught and handled gracefully; the error will be silently swallowed, leading to potential application instability.

## Solution

The `bugSolution.js` file shows the corrected code. The `.catch` block now includes proper error handling.  A more robust solution might include logging the error to a centralized logging system and sending a proper error response to the client.

## How to Run

1. Clone the repository: `git clone ...`
2. Navigate to the directory: `cd ...`
3. Install dependencies (for both files): `npm install express`
4. Run the problematic code: `node bug.js`
5. Run the corrected code: `node bugSolution.js`

Observe the difference in behavior when an error occurs.