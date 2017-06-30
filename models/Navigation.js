var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Navigation Model
 * =============
 */

var Navigation = new keystone.List('Navigation', {
  label: 'navigation',
  path: 'navigation',
	autokey: {
    from: 'name',
    path: 'key',
    unique: true }
});

Navigation.add({
  name: {
        type: Types.Text,
        required: true,
        initial: true,
        unique: true
    },
    links: {
        type: Types.Relationship,
        many: true,
        ref: 'Link'
    }
});

Navigation.register();
