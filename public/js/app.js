'use strict';

(function (window, document, undefined) {

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
    var grid = document.querySelector('.grid');
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

    // +- button
    var toggleMenuButton = document.getElementById('toggleMenuButton');
    toggleMenuButton.addEventListener("click", function (e) {
      e.preventDefault();
      var navbarCollapse = mainNavigation.querySelector('.navbar-collapse');
      navbarCollapse.classList.toggle('collapse');
      toggleMenuButton.classList.toggle('is-active');
    });
  }

  var grid = document.querySelector('.grid');

  initNav();

  imagesLoaded(grid, function () {
    resizeGridItems();
    initMasonry();
  });
})(window, document);