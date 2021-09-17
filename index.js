const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});