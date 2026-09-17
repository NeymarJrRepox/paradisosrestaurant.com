(function () {
  var nav = document.querySelector('.nav-wrap');
  var burger = document.querySelector('.hamburger');

  if (burger && nav) {
    burger.addEventListener('click', function (e) {
      e.preventDefault();
      nav.classList.toggle('menu-open');
    });
  }

  if (nav) {
    nav.querySelectorAll('.wsite-menu-item').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('menu-open');
      });
    });
  }
})();
