var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  view.query('about', keystone.list('About').model.find().sort('sortOrder'));
  var locals = res.locals;

  //set locals
  locals.section = 'about'
  view.render('about');

}
