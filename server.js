// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');

const configurePassport = require('./config/passport');

// Create a new Mongoose connection instance
const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress();

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Configure the Passport middleware
const passport = configurePassport();

// Use the Express application instance to listen to the '3000' port
app.listen(port);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');



function normalizePort(val) {
    let port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  



// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;