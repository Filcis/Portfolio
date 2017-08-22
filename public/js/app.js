'use strict';

(function () {

  var gridItems = document.querySelectorAll('.grid-item');

  [].forEach.call(gridItems, function (item) {
    if (item.clientWidth > item.clientHeight) {
      item.className += ' size2';
    }
  });

  // MASONRY
  window.onload = function () {
    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
      // options
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
      // fitWidth: true,
      // gutter: 50
    });
  };

  //NAVIGATION

  var mainNavigation = document.getElementById('main_nav');
  var submenuToggle = mainNavigation.querySelectorAll('.dropdown_toggle');

  [].forEach.call(submenuToggle, function (toggle) {
    toggle.addEventListener('click', function () {
      var submenu = mainNavigation.querySelector('.dropdown_menu');
      var arrow = mainNavigation.querySelector('.arrow_right');
      submenu.classList.toggle('open');
      arrow.classList.toggle('open');
    });
  });

  var toggleMenuButton = document.getElementById('toggleMenuButton');
  toggleMenuButton.addEventListener("click", function (e) {
    e.preventDefault();
    var navbarCollapse = mainNavigation.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('collapse');
  });
})();