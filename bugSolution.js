const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('Hello!');
  }).catch(err => {
    console.error('Error in route handler:', err);
    res.status(500).send('Internal Server Error'); //send a proper error response
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation successful';
}