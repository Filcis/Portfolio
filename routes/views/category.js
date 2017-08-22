var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'project';
	locals.category = req.params.category;
	locals.data = {
	categories: [],
};
	locals.project = 'test';

	// Load the current category filter
	view.on('init', function (next) {

		if (req.params.category) {
			keystone.list('ProjectCategory').model.findOne({ key: locals.category }).exec(function (err, result) {
				locals.categoryFilter = result;
				next(err);
			});
		} else {
			next();
		}
	});

	// Load the posts
	view.on('init', function (next) {

		var q = keystone.list('Project').model.find()
			.sort('-createdDate')
			.populate('categories');

		if (locals.category) {
			console.log(locals.categoryFilter);
			q.where('categories').in([locals.categoryFilter._id]);
		}

		q.exec(function (err, results) {
			locals.projects = results;
			next(err);
		});
	});

	// // Load the galleries by sortOrder
	// view.query('projects', keystone.list('Project').model.find().populate('categories').sort('sortOrder'));

	// Render the view
	view.render('category');

};
