'use strict';

(function () {
  window.onload = function () {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
      // options
      itemSelector: '.grid-item',
      percentPosition: true,
      gutter: 15
    });
  };

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