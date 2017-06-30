var keystone = require('keystone');

exports = module.exports = function (req, res) {

  galleriesCategories = keystone.list('GalleryCategory');
  var submenuItems = '';
  galleriesCategories.model.find().exec(function(err, items) {
          console.log(posts)
  				submenuItems = items;
      });

};
