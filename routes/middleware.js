/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');
var keystone = require ('keystone');

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
// exports.initSubmenu = function (req, res, next) {
//
//
// 	next();
// };

exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'projekty', key: 'project', href: '/projekty'},
		{ label: 'o mnie', key: 'about', href: '/o_mnie' },
		{ label: 'kontakt', key: 'contact', href: '/kontakt' },
	];

	res.locals.user = req.user;
	next();
};

exports.initSubmenu = function (req, res, next) {
	// Add project categories as submenu of projects
		keystone.list('ProjectCategory').model.find().exec(function(err, categories) {
					res.locals.navLinks[0].submenu = categories;
			}).then( function() {
					next();
			});
	// next();
};

/**
	Redirects all requests to https
*/

exports.redirectToHttps = function(req, res, next) {
	if(req.headers.host === 'www.cislakfilip.pl' && req.headers['x-forwarded-proto'] !== 'https') {
		return res.redirect('https://www.cislakfilip.pl'+req.url);
	} else if(req.headers.host === 'cislakfilip.pl' && req.headers['x-forwarded-proto'] !== 'https') {
		return res.redirect('https://cislakfilip.pl'+req.url);
	}
	next();
};

/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
