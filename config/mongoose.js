// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
let URI =	"mongodb://pawan:pawan@ds113749.mlab.com:13749/comp308project";
	//const db = mongoose.connect(config.db);
	const db = mongoose.connect(URI);
	// Load the 'User' model 
    require('../app/models/user.server.model');
    
    require('../app/models/nurse.server.model');
    require('../app/models/vitalSigns.server.model');
	// Return the Mongoose connection instance
	return db;
};