const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require('./routes/routes.author')(app);
app.listen(8000, () => console.log(`Listening on port: 8000`) );