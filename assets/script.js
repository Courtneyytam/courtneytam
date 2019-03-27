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

function smoothScroll(hash){
	$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
	});
};

$(document).ready(function(){
	// Add smooth scrolling to all links
	$(".item").on('click', function(event){
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			smoothScroll(hash);
		} // End if
	});

});

if ((window.location.pathname != "/index.html") || (window.location.pathname != "/")) {
	$("#caseStudies").on('click', function(event){
		window.location.pathname = "/";
		smoothScroll("#case-studies");
	});
	$("#aboutPanels").on('click', function(event){
		window.location.pathname = "/";
		smoothScroll("#about-panels");
	});
}

/*

$(document).ready(function() {
    $('html, body').hide();

    if (window.location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
			scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
			  });
        }, 0);
    }
    else {
        $('html, body').show();
    }
});*/

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



