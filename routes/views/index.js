var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.category = req.params.category;
	locals.categories = 'brak kategorii';

	// Load the galleries by sortOrder
	view.query('projects', keystone.list('Project').model.find().populate('categories').sort('-createdDate'));

	// Render the view
	view.render('index');
};
