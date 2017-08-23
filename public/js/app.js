'use strict';

(function () {

  function resizeGridItems() {
    // Select all masonry grid items into NodeList gridItems
    var gridItems = document.querySelectorAll('.grid-item');
    // Iterate through all gridItems and add class size2 if they are horizontal
    for (var i = 0; i < gridItems.length; i++) {
      if (gridItems[i].clientWidth > gridItems[i].clientHeight) {
        gridItems[i].className += ' size2';
      }
    }
  }

  function initMasonry() {
    var msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      // basic grid column module
      columnWidth: '.grid-sizer'
    });
  }

  //NAVIGATION
  function initNav() {
    var mainNavigation = document.getElementById('main_nav');
    var submenuToggle = mainNavigation.querySelectorAll('.dropdown_toggle');

    [].forEach.call(submenuToggle, function (toggle) {
      toggle.addEventListener('click', function () {
        var submenu = mainNavigation.querySelector('.dropdown_menu');
        submenu.classList.toggle('open');
        toggle.classList.toggle('closed');
      });
    });
  }

  var grid = document.querySelector('.grid');

  initNav();

  // initialise Masonry and image functions when images are loaded
  imagesLoaded(grid, function () {
    resizeGridItems();
    initMasonry();
  });

})();
