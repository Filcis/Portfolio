var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * =============
 */

var Project = new keystone.List('Project', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Project.add({
	name: { type: String, required: true },
	shortDescription: { type: String, required: false },
	description: { type: Types.Html, wysiwyg: true },
	color: {type: Types.Color},
	publishedDate: { type: Date, default: Date.now },
	createdDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages},
	categories: { type: Types.Relationship, ref: 'ProjectCategory', many:true }
});

Project.register();
