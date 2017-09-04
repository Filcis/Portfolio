const keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.categoriesNames = [];

  locals.data = {
    project: [],
};

 // Load project
view.on('init', function(next) {
  var q = keystone.list('Project').model.findOne({key: req.params.projekt}).populate('categories');
  q.exec(function(err, results) {
		if (err) {
			console.log(err);
		}
		else {
			locals.project = results;
		}
  next(err);
  });
});

//create category filter
view.on('init', function (next) {
	var categoriesNames  = locals.project.categories.map(function(el){
		return el.name;
	});
	locals.categoriesNames = categoriesNames;
	next();
});

// Load the posts
	view.on('init', function (next) {
		var q = keystone.list('Project').model.find({categories: { $in: locals.project.categories } })
			.sort('-createdDate')
			.populate('categories');
			q.exec(function (err, results) {
			locals.projects = results;
			next(err);
		});
	});

	// Render the view
	view.render('project');
};
