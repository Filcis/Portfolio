const keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.category = req.params.category;
	locals.categories = 'brak kategorii';
  locals.data = {
    project: [],
};

 // Load project
view.on('init', function(next) {
  console.log(req.params.projekt);
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

	// Render the view
	view.render('project');
};
