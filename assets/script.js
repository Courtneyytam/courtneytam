var num = 150;

$(window).bind('scroll', function(){
    if ($(window).scrollTop()>num){
        $('.menu').addClass('scrolled');
        console.log("scroll working");
    }
    else
    {
        $('.menu').removeClass('scrolled');
    }
});

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
		  });
	} // End if
	});
});

var selectedhome = $("#nav-home");
var selectedcase = $("#nav-case");
var selectedcontact = $("#nav-contact");

selectedhome.on('click', function(event) {
	selectedcase.removeClass("active");
	selectedcontact.removeClass("active");
	selectedhome.addClass("active");
});

selectedcase.on('click', function(event) {
	selectedhome.removeClass("active");
	selectedcontact.removeClass("active");
	selectedcase.addClass("active");
});

selectedcontact.on('click', function(event) {
	selectedcase.removeClass("active");
	selectedhome.removeClass("active");
	selectedcontact.addClass("active");
});