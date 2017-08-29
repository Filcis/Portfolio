'use strict';

// Local variables are faster to resolve than the global variables
(function (window, document, undefined) {

  /**
  * Selectors
  */

  var grid = document.querySelector('.grid');
  var gridItems = document.querySelectorAll('.grid-item');
  var mainNavigation = document.getElementById('main_nav');
  //parents of collapsible submenus
  var dropdown = mainNavigation.querySelectorAll('.dropdown_toggle');
  var submenu = mainNavigation.querySelector('.dropdown_menu');
  var hamburger = document.getElementById('toggleMenuButton');

  // function resizeGridItems () {
  //   // Iterate through all gridItems and add class size2 if they are horizontal
  //   if (gridItems.length) {
  //     for (let i = 0; i< gridItems.length; i++) {
  //       if (gridItems[i].clientWidth > gridItems[i].clientHeight) {
  //         gridItems[i].className += ' size2';
  //       }
  //     }
  //   }
  // }

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
    // collapsible nav
    // TODO: use for loop instead
    [].forEach.call(dropdown, function (dropdown) {
      dropdown.addEventListener('click', function () {
        submenu.classList.toggle('open');
        dropdown.setAttribute('aria-expanded', dropdown.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      });
    });
  }

  function hamburgerToggle(event) {
    event.preventDefault();
    mainNavigation.classList.toggle('collapse');
    hamburger.classList.toggle('is-active');
  }

  // hamburger EventListener
  hamburger.addEventListener("click", hamburgerToggle);

  initNav();

  if (grid) {
    imagesLoaded(grid, function () {
      // resizeGridItems();
      initMasonry();
    });
  }
})(window, document);