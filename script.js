document.getElementById('toggle-button').addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbar-links');
    if (navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
    } else {
        navbarLinks.classList.add('active');
    }
});

   

