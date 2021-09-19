require('dotenv').config();
const path = require('path');
const connectMongoose = require('./mongoose')
const cors = require('cors')
const express = require('express')
const {urlencoded,json,static} = express
const app = express();
const PORT = process.env.PORT || 4000;
const userFormPost = require('./routes/userFormPost')


app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(json());
app.use(static(path.join(__dirname, 'public')));
app.use('/send-message', userFormPost)
connectMongoose()


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
