const express = require('express');
const app = express();
const port = 3000;

// Import the finance routes
require('./routes/finance')(app);

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});