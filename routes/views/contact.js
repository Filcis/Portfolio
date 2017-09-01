var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'contact';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	// On POST requests, add the Enquiry item to the database
	// view.on Adds a method (or array of methods) to be executed in parallel to the init, action or render queue.

	view.on('post', { action: 'contact' }, function (next) {
		var newEnquiry = new Enquiry.model();
		var updater = newEnquiry.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, message',
			errorMessage: 'Nastąpił problem w wypełnianiu formularza:',
			requiredMessages: {
        name: "Imię i Nazwisko są wymagane",
				email: "Adres email jest wymagany",
				message: "Proszę napisać wiadomość",
    	},
			requiredMessages: {
				email: "Proszę podać prawidłowo wypełniony adres email",
    	},
		}, function (err) {
			console.log(err);
			if (err) {
				locals.validationErrors = err.error;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	view.render('contact');
};
