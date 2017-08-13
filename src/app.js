(function(){

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // MASONRY
  window.onload = () => {
    const grid = document.querySelector('.grid');

    const msnry = new Masonry( grid, {
      // options
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer',
      // fitWidth: true,
      // gutter: 50
    });
  };

  //NAVIGATION

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

})();
