var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var About = new keystone.List('About', {
  label: 'about',
  path: 'about',
	autokey: { from: 'name', path: 'key', unique: true },
});

About.add({
  title: { type: String, required: false },
  e_mail: { type: Types.Email, required: false },
  phone: { type: Types.Number, required: false },
  about: { type: Types.Html, required: false},
  heroImage: { type: Types.CloudinaryImage,width:400, height:400, publicID: 'slug', required: false }
});

About.register();
