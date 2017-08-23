(function(){

  function resizeGridItems () {
    // Select all masonry grid items into NodeList gridItems
    let gridItems = document.querySelectorAll('.grid-item');
    // Iterate through all gridItems and add class size2 if they are horizontal
    for (let i = 0; i< gridItems.length; i++) {
      if (gridItems[i].clientWidth > gridItems[i].clientHeight) {
        gridItems[i].className += ' size2';
      }
    }
  }

  function initMasonry () {
    const grid = document.querySelector('.grid');
    const msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      // basic grid column module
      columnWidth: '.grid-sizer',
    });
  }

  //NAVIGATION
  function initNav() {
      const mainNavigation = document.getElementById('main_nav');
      const submenuToggle = mainNavigation.querySelectorAll('.dropdown_toggle');

      [].forEach.call(submenuToggle, (toggle) => {
          toggle.addEventListener('click', function() {
          const submenu = mainNavigation.querySelector('.dropdown_menu');
          const arrow = mainNavigation.querySelector('.arrow_right');
          submenu.classList.toggle('open');
          arrow.classList.toggle('open');
        });
      });

      const toggleMenuButton = document.getElementById('toggleMenuButton');
      toggleMenuButton.addEventListener("click", function(e){
        e.preventDefault();
        const navbarCollapse = mainNavigation.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('collapse');
      });
  }

    initNav();

imagesLoaded( grid, function() {
  resizeGridItems();
  initMasonry();
});

})();
