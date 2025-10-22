
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/say-goodbye', (req, res) => {
  res.json({ message: "Goodbye! This is the old V1 function name." });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
