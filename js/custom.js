
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navBar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if ($('.search').css("display") === "block") {

    } else if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navBar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navBar').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

/* Search Bar */
$('.se').click(function() {
    $('.search').slideToggle("fast");
})

/* Menu bar */

$('.menuCollapsed').click(function() {
    //$('.navBar').attr('position','relative');
    if($('#site-canvas').css('left') === '0px') {
        $('#site-canvas').animate({
        left: '250px'
    }, 600);
        $('#menu-off').animate({
            left: '0'
        },600);
    } else{
        $('#site-canvas').animate({
        left: '0'
    }, 600);
        $('#menu-off').animate({
            left: '-250px'
        },600);
    }

})



















