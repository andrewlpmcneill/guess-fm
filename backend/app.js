const express = require('express');
const morgan = require('morgan');
const PORT = 8080;
const ENVIRONMENT = 'dev';

const app = express();

// middleware setup
app.use(morgan(ENVIRONMENT));

app.get('/', (req, res) => {
  res.json({greetings: 'hello world'});
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));