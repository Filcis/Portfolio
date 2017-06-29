var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Category Model
 * =============
 */

var GalleryCategory = new keystone.List('GalleryCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});
GalleryCategory.add({
	name: { type: String, required: true },
});

GalleryCategory.relationship({ path: 'galleries', ref: 'Gallery', refPath: 'categories'});


GalleryCategory.register();
