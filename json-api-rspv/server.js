const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')

require('./db/db');


app.use(session({
  secret: 'secret01',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // Allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));


app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
