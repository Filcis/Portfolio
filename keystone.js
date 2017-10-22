// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Fc_portfolio',
	'brand': 'Fc_portfolio',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',
	'mongo': process.env.MONGODB_ADDON_URI || "mongodb://localhost/fc_portfolio",
	'port': process.env.PORT || '8080',
	'emails': 'templates/emails',
	'env' : process.env.NODE_ENV || "development",
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('cloudinary config', 'cloudinary://564966198917524:UtJlbJI_rt-TLWGATR96M8fNF1k@dool1dbrb' );

// optional, will force cloudinary to serve images over https
keystone.set('cloudinary secure', true);

// Load your project's Routes
keystone.set('routes', require('./routes'));

// keystone.set('session store', 'mongo');


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	projects: ['projects','project-categories'],
	enquiries: 'enquiries',
	users: 'users',
});


keystone.start();
